## Why

The platform currently captures only authentication data (name, email, password) and access profile. To enable purchases, sales, shipping calculations, invoice issuance, and basic KYC identity verification, users must be able to provide personal data (CPF, birthDate, phone, gender) and one or more delivery addresses — both isolated from the auth entity to meet LGPD requirements.

## What Changes

- New `PersonalData` entity with 1:1 relation to `User` (CPF stored encrypted, masked in responses)
- New `Address` entity with 1:N relation to `User` (supports multiple addresses, one marked as default)
- Use cases: create/update/get personal data; create/list/update/delete/set-default address
- Prisma migration adding `PersonalData` and `Address` tables with cascade deletes
- New REST endpoints under `/users/:userId/personal-data` and `/users/:userId/addresses`, all JWT-protected

## Capabilities

### New Capabilities

- `user-personal-data`: Collects and manages a user's personal identity data (CPF, birthDate, phone, gender) with a 1:1 user relation and LGPD-compliant CPF handling
- `user-address`: Manages one or more delivery addresses per user with support for marking a single address as default

### Modified Capabilities

<!-- None — these are entirely new capabilities -->

## Impact

- **Database**: Two new Prisma models (`PersonalData`, `Address`) with `onDelete: Cascade` from `User`
- **Modules**: Two new NestJS modules (`personalData`, `address`) wired into `AppModule`
- **Repositories**: Two new repository interfaces and Prisma implementations
- **API**: 9 new JWT-protected endpoints (3 for personal data, 6 for addresses)
- **Encryption**: CPF must be encrypted at rest; requires a crypto utility (e.g., AES via Node.js `crypto`)
