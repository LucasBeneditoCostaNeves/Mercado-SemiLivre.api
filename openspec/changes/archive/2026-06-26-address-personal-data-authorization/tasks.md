## 1. Auth Layer — Guard e Decorator

- [x] 1.1 Criar `src/infra/http/modules/auth/guards/adminProfile.guard.ts` com `AdminProfileGuard` implementando `CanActivate`
- [x] 1.2 Criar `src/infra/http/modules/auth/decorators/currentUser.decorator.ts` com o decorator `@CurrentUser()`

## 2. Proteger Rotas Admin Existentes — Address

- [x] 2.1 Aplicar `@UseGuards(AdminProfileGuard)` no `AddressController` (nível de classe)
- [x] 2.2 Registrar `AdminProfileGuard` como provider no `AddressModule`

## 3. Proteger Rotas Admin Existentes — PersonalData

- [x] 3.1 Aplicar `@UseGuards(AdminProfileGuard)` no `PersonalDataController` (nível de classe)
- [x] 3.2 Registrar `AdminProfileGuard` como provider no `PersonalDataModule`

## 4. Novas Rotas Self — Address

- [x] 4.1 Criar `src/infra/http/modules/address/meAddress.controller.ts` com `@Controller('me/addresses')`
- [x] 4.2 Implementar `POST /me/addresses` usando `@CurrentUser()` para extrair `userId`
- [x] 4.3 Implementar `GET /me/addresses` usando `@CurrentUser()` para extrair `userId`
- [x] 4.4 Implementar `GET /me/addresses/:id` usando `@CurrentUser()` para extrair `userId`
- [x] 4.5 Implementar `PUT /me/addresses/:id` usando `@CurrentUser()` para extrair `userId`
- [x] 4.6 Implementar `DELETE /me/addresses/:id` usando `@CurrentUser()` para extrair `userId`
- [x] 4.7 Implementar `PATCH /me/addresses/:id/default` usando `@CurrentUser()` para extrair `userId`
- [x] 4.8 Registrar `MeAddressController` no `AddressModule`

## 5. Novas Rotas Self — PersonalData

- [x] 5.1 Criar `src/infra/http/modules/personalData/mePersonalData.controller.ts` com `@Controller('me/personal-data')`
- [x] 5.2 Implementar `POST /me/personal-data` usando `@CurrentUser()` para extrair `userId`
- [x] 5.3 Implementar `GET /me/personal-data` usando `@CurrentUser()` para extrair `userId`
- [x] 5.4 Implementar `PUT /me/personal-data` usando `@CurrentUser()` para extrair `userId`
- [x] 5.5 Registrar `MePersonalDataController` no `PersonalDataModule`

## 6. Atualizar Coleção Insomnia

- [x] 6.1 Adicionar as rotas `/me/addresses` e `/me/personal-data` no arquivo `docs/insomnia-collection.json`
