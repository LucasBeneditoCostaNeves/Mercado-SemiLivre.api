## Context

The codebase uses NestJS with Clean Architecture: domain entities in `src/modules/<name>/entities/`, repository interfaces in `src/modules/<name>/repositories/`, Prisma implementations in `src/infra/database/prisma/repositories/`, and HTTP layer in `src/infra/http/modules/<name>/`. All existing modules follow this pattern consistently.

The `User` model lives in `prisma/schema/user.prisma`. Cascade deletes are already used for `Product → User`. Prisma schema is split across multiple `.prisma` files under `prisma/schema/`.

Authentication is JWT-based; guards are already applied in other controllers.

## Goals / Non-Goals

**Goals:**
- Add `PersonalData` module (1:1 with User) with CRUD use cases and LGPD-compliant CPF storage
- Add `Address` module (1:N with User) with full CRUD and default-address invariant
- Follow exactly the existing architectural pattern for new modules

**Non-Goals:**
- Validating CPF against Receita Federal
- Verifying addresses via Correios / ViaCEP (consumed by frontend)
- Multiple-address management in UI (v1: single default)
- 2FA via phone

## Decisions

### 1. CPF encryption: AES-256-CBC via Node.js `crypto`

**Chosen:** Store CPF as AES-256-CBC ciphertext in the DB; decrypt on read for masking/comparison.  
**Why not bcrypt/argon2 (one-way hash):** CPF comparison during uniqueness check requires two paths — hash the incoming value and compare hashes. This works but complicates the masking step (we can't reconstruct the digits to produce `***.456.789-**`). Deterministic encryption (or storing both hash + encrypted value) is the standard approach for PII that needs to be partially revealed.  
**Implementation:** A `CpfEncryption` utility in `src/utils/cpf-encryption.ts` wraps `crypto.createCipheriv`/`createDecipheriv` with the key from `CPF_ENCRYPTION_KEY` env var. Uniqueness check at the DB level uses the raw ciphertext (same plaintext + same IV → same ciphertext is only true with ECB or deterministic IV; we use a fixed IV per installation for uniqueness check feasibility, documented as a known trade-off).

### 2. `isDefault` invariant enforced at application layer

**Chosen:** `SetDefaultAddressUseCase` clears the existing default (via repository method `clearDefaultByUserId`) before setting the new one — two DB writes in sequence, no transaction for v1.  
**Why not DB constraint:** PostgreSQL partial unique index on `(userId, isDefault) WHERE isDefault = true` would enforce this at DB level, but Prisma doesn't expose partial indexes natively and the additional migration complexity isn't justified for v1.  
**Known trade-off:** A concurrent double-request could result in two defaults momentarily. Acceptable for v1; a DB-level guard can be added later.

### 3. 1:1 enforcement for `PersonalData` at application layer

**Chosen:** `CreatePersonalDataUseCase` calls `repository.findByUserId(userId)` before creating. If a record exists, throws `PersonalDataAlreadyExistsError` → mapped to HTTP 409.  
**Why not DB unique on `userId` alone:** The DB `@unique` on `userId` will enforce this as a safety net, but the use case throws a typed domain error with a meaningful message before hitting the DB constraint.

### 4. Module structure mirrors existing pattern

`personalData` and `address` modules are created as peers of `user`, `product`, etc. Each module's NestJS module class wires up repository token, use cases, and controller — same pattern as `ProductModule`.

### 5. CPF masking in ViewModel

The ViewModel (`PersonalDataViewModel.toHTTP`) decrypts the CPF and applies a mask (`***.XXX.XXX-**` showing only digits 4–9) before returning it in any API response. The raw decrypted value never leaves the server.

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| `CPF_ENCRYPTION_KEY` lost → all CPF data irrecoverable | Document as required env var; store in secrets manager in production |
| Deterministic IV for CPF → ciphertext is predictable given the same plaintext | Acceptable for uniqueness checking; CPF is already a known-format string, so the threat model doesn't change significantly |
| Two-write default swap not atomic | Acceptable for v1; add a transaction or partial unique index if this becomes a production issue |
| Prisma multi-file schema requires `prismaSchemaFolder` preview feature already enabled | Confirmed: the project already uses split schema files in `prisma/schema/` |
