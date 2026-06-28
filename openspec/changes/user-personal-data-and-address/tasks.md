## 1. Utilities

- [x] 1.1 Create `src/utils/cpf-encryption.ts` with `encrypt(cpf: string)` and `decrypt(ciphertext: string)` using AES-256-CBC and `CPF_ENCRYPTION_KEY` env var
- [x] 1.2 Create `src/utils/cpf-mask.ts` with `maskCpf(plaintext: string): string` returning `***.XXX.XXX-**`

## 2. Domain — PersonalData

- [x] 2.1 Create `src/domain/errors/personalData/` with `PersonalDataAlreadyExistsError.ts` and `PersonalDataNotFoundError.ts`
- [x] 2.2 Create entity `src/modules/personalData/entities/PersonalData.ts` (id, cpf, birthDate, phone, gender, userId, createdAt, updatedAt)
- [x] 2.3 Create `src/modules/personalData/repositories/PersonalDataRepository.ts` with abstract methods: `create`, `findByUserId`, `update`

## 3. Domain — Address

- [x] 3.1 Create `src/domain/errors/address/` with `AddressNotFoundError.ts` and `AddressForbiddenError.ts`
- [x] 3.2 Create entity `src/modules/address/entities/Address.ts` (id, cep, state, city, street, number, complement, isDefault, userId, createdAt, updatedAt)
- [x] 3.3 Create `src/modules/address/repositories/AddressRepository.ts` with abstract methods: `create`, `findById`, `findManyByUserId`, `update`, `delete`, `clearDefaultByUserId`

## 4. Use Cases — PersonalData

- [x] 4.1 Create `CreatePersonalDataUseCase`: check duplicate userId → throw `PersonalDataAlreadyExistsError`; check duplicate CPF (encrypted) → throw `PersonalDataAlreadyExistsError`; encrypt CPF; persist
- [x] 4.2 Create `GetPersonalDataUseCase`: find by userId → throw `PersonalDataNotFoundError` if not found; return entity
- [x] 4.3 Create `UpdatePersonalDataUseCase`: find by userId → throw `PersonalDataNotFoundError` if not found; update phone/gender/birthDate; persist

## 5. Use Cases — Address

- [x] 5.1 Create `CreateAddressUseCase`: create and persist address (isDefault defaults to false)
- [x] 5.2 Create `ListAddressesUseCase`: find all addresses for a userId
- [x] 5.3 Create `GetAddressUseCase`: find address by id → 404 if not found; verify userId ownership → throw `AddressForbiddenError` if mismatch
- [x] 5.4 Create `UpdateAddressUseCase`: find address → 404/403 checks; update mutable fields; persist
- [x] 5.5 Create `DeleteAddressUseCase`: find address → 404/403 checks; delete
- [x] 5.6 Create `SetDefaultAddressUseCase`: find address → 404/403 checks; call `clearDefaultByUserId`; set `isDefault: true`; persist

## 6. Infrastructure — Prisma Schema & Migration

- [x] 6.1 Add `PersonalData` model to `prisma/schema/user.prisma` with `onDelete: Cascade` from User and `@unique` on `userId`
- [x] 6.2 Add `Address` model to `prisma/schema/user.prisma` (or a new `address.prisma`) with `onDelete: Cascade` from User
- [x] 6.3 Run `npx prisma migrate dev --name add_personal_data_and_address` and verify migration SQL

## 7. Infrastructure — Repositories

- [x] 7.1 Create `PrismaPersonalDataMapper.ts` (`toPrisma` and `toDomain`)
- [x] 7.2 Create `PrismaPersonalDataRepository.ts` implementing `PersonalDataRepository`
- [x] 7.3 Create `PrismaAddressMapper.ts` (`toPrisma` and `toDomain`)
- [x] 7.4 Create `PrismaAddressRepository.ts` implementing `AddressRepository`

## 8. Presentation — PersonalData

- [x] 8.1 Create Zod schema `src/infra/http/modules/personalData/schemas/createPersonalDataSchema.ts` (validate CPF format `000.000.000-00` and phone `(00) 00000-0000`)
- [x] 8.2 Create Zod schema `updatePersonalDataSchema.ts`
- [x] 8.3 Create `PersonalDataViewModel.ts` with `toHTTP` method that decrypts CPF and returns it masked
- [x] 8.4 Create DTOs: `CreatePersonalDataDTO.ts`, `UpdatePersonalDataDTO.ts`
- [x] 8.5 Create `PersonalDataController.ts` with `POST`, `GET`, `PUT` routes under `/users/:userId/personal-data`, all guarded with `@UseGuards(AuthGuard)`
- [x] 8.6 Create `PersonalDataModule.ts` and wire up repository token, use cases, and controller

## 9. Presentation — Address

- [x] 9.1 Create Zod schema `createAddressSchema.ts` (required: cep, state, city, street, number; optional: complement)
- [x] 9.2 Create Zod schema `updateAddressSchema.ts`
- [x] 9.3 Create `AddressViewModel.ts` with `toHTTP` method
- [x] 9.4 Create DTOs: `CreateAddressDTO.ts`, `UpdateAddressDTO.ts`
- [x] 9.5 Create `AddressController.ts` with all 6 routes, guarded with `@UseGuards(AuthGuard)`, enforcing `userId` ownership check
- [x] 9.6 Create `AddressModule.ts` and wire up repository token, use cases, and controller

## 10. App Wiring

- [x] 10.1 Import `PersonalDataModule` and `AddressModule` into `AppModule`
- [x] 10.2 Add `CPF_ENCRYPTION_KEY` to `.env.example` with a placeholder value

## 11. Tests

- [x] 11.1 Unit tests for `CpfEncryption` utility (encrypt → decrypt roundtrip; deterministic output)
- [x] 11.2 Unit tests for `PersonalData` entity (constructor defaults, getters/setters)
- [x] 11.3 Unit tests for `CreatePersonalDataUseCase` (happy path, duplicate userId, duplicate CPF)
- [x] 11.4 Unit tests for `GetPersonalDataUseCase` (happy path, not found)
- [x] 11.5 Unit tests for `UpdatePersonalDataUseCase` (happy path, not found)
- [x] 11.6 Unit tests for `Address` entity
- [x] 11.7 Unit tests for `CreateAddressUseCase`
- [x] 11.8 Unit tests for `SetDefaultAddressUseCase` (sets new default, clears previous default)
- [x] 11.9 Unit tests for `DeleteAddressUseCase` (happy path, forbidden, not found)
- [ ] 11.10 E2E tests for `POST /users/:userId/personal-data` (201, 409 duplicate, 422 invalid CPF)
- [ ] 11.11 E2E tests for `POST /users/:userId/addresses` and `PATCH /users/:userId/addresses/:id/default`
