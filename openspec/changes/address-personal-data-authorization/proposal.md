## Why

As rotas de `Address` e `PersonalData` aceitam qualquer usuário autenticado, permitindo que qualquer um leia ou modifique dados sensíveis de terceiros apenas conhecendo o UUID. Isso viola a LGPD e o princípio de menor privilégio.

## What Changes

- Rotas `POST/GET/PUT/DELETE/PATCH /users/:userId/addresses` passam a exigir perfil admin.
- Rotas `POST/GET/PUT /users/:userId/personal-data` passam a exigir perfil admin.
- Novas rotas `POST/GET/PUT/DELETE/PATCH /me/addresses` para usuários comuns (userId extraído do token).
- Novas rotas `POST/GET/PUT /me/personal-data` para usuários comuns (userId extraído do token).
- Novo `AdminProfileGuard` que rejeita com 403 qualquer token cujo `profileId` não corresponda a `ADMIN_PROFILE_ID`.
- Novo decorator `@CurrentUser` para extrair o usuário autenticado do contexto de forma tipada.

## Capabilities

### New Capabilities

- `admin-resource-guard`: Guard NestJS que restringe acesso a rotas admin verificando `profileId` no token JWT.
- `me-address-routes`: Conjunto de rotas `/me/addresses` para o usuário autenticado gerenciar seus próprios endereços.
- `me-personal-data-routes`: Conjunto de rotas `/me/personal-data` para o usuário autenticado gerenciar seus próprios dados pessoais.

### Modified Capabilities

- `user-address`: As rotas existentes com `:userId` na URL passam a exigir perfil admin (mudança de requisito de segurança).
- `user-personal-data`: As rotas existentes com `:userId` na URL passam a exigir perfil admin (mudança de requisito de segurança).

## Impact

- **Controllers**: `AddressController` e `PersonalDataController` recebem `@UseGuards(AdminProfileGuard)`.
- **Módulos**: `AddressModule` e `PersonalDataModule` registram os novos controllers e o guard.
- **Auth layer**: Dois novos arquivos em `src/infra/http/modules/auth/` (guard + decorator).
- **Use cases e repositórios**: sem alteração.
- **API pública**: novos endpoints `/me/*` disponíveis para todos os usuários autenticados.
