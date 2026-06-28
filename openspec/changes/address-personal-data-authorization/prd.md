# PRD — Autorização em Rotas de Address e PersonalData

**Data:** 2026-06-19  
**Status:** Proposto  
**Autor:** Lucas

---

## 1. Problema

As rotas de `Address` e `PersonalData` atualmente aceitam qualquer usuário autenticado com um JWT válido. Qualquer um que conheça o UUID de outro usuário pode ler ou modificar seus dados sensíveis (endereços e CPF/telefone/data de nascimento). Isso viola o princípio de menor privilégio e a conformidade com a LGPD.

---

## 2. Objetivo

Separar as rotas em dois grupos com políticas de autorização distintas:

| Grupo | Prefixo | Quem acessa | Fonte do `userId` |
|-------|---------|-------------|-------------------|
| **Admin** | `/users/:userId/addresses` | Somente perfil ADMIN | URL param |
| **Admin** | `/users/:userId/personal-data` | Somente perfil ADMIN | URL param |
| **Self** | `/me/addresses` | Qualquer usuário autenticado | Token JWT |
| **Self** | `/me/personal-data` | Qualquer usuário autenticado | Token JWT |

O usuário autenticado nas rotas `/me` recebe apenas **seus próprios dados**, sem que seja possível acessar dados de terceiros via manipulação de parâmetros.

---

## 3. Não-Objetivos

- Criar sistema de roles/permissões genérico (o ADMIN_PROFILE_ID já atende a v1).
- Alterar a lógica de negócio dos use cases existentes.
- Adicionar paginação nas rotas `/me`.
- Audit log de acesso admin (pode vir em outra iteração).

---

## 4. Solução Técnica

### 4.1 Novo Guard: `AdminProfileGuard`

Criado em `src/infra/http/modules/auth/guards/adminProfile.guard.ts`.

**Responsabilidade:** verificar se `request.user.profileId === process.env.ADMIN_PROFILE_ID`. Caso contrário, lança `ForbiddenException`.

```
canActivate(context):
  user = request.user (já populado pelo JwtAuthGuard)
  if user.profileId !== ADMIN_PROFILE_ID → throw ForbiddenException
  return true
```

O guard não precisa ir ao banco — o `profileId` já está no payload do token (confirmado em `AuthenticatedUser`/`JwtStrategy`).

### 4.2 Proteção das Rotas Admin Existentes

Adicionar `@UseGuards(AdminProfileGuard)` nos controllers `AddressController` e `PersonalDataController` existentes (que já usam `/:userId/`).

A ordem de guards deve ser: `JwtAuthGuard` (global, já aplicado) → `AdminProfileGuard` (local no controller).

### 4.3 Novas Rotas `/me`

Criar dois novos controllers:

- `src/infra/http/modules/address/meAddress.controller.ts` → `@Controller('me/addresses')`
- `src/infra/http/modules/personalData/mePersonalData.controller.ts` → `@Controller('me/personal-data')`

Esses controllers injetam os **mesmos use cases** dos controllers admin. A única diferença é que o `userId` vem de `@Req() req: AuthRequestModel` → `req.user.id`, não da URL.

Nenhum parâmetro de rota expõe um ID de usuário. O usuário não tem como escalar para acessar dados de outro.

### 4.4 Decorator `@CurrentUser`

Para evitar acoplamento direto ao `Request` e manter os controllers limpos, criar um parameter decorator:

```
src/infra/http/modules/auth/decorators/currentUser.decorator.ts
```

```typescript
export const CurrentUser = createParamDecorator(
  (_, ctx: ExecutionContext): AuthenticatedUser => {
    const request = ctx.switchToHttp().getRequest<AuthRequestModel>()
    return request.user
  }
)
```

Uso nos controllers `/me`:

```typescript
async create(@CurrentUser() user: AuthenticatedUser, @Body() body: CreateAddressBodyDto) {
  return this.createAddressUseCase.execute({ userId: user.id, ...body })
}
```

---

## 5. Contratos de API

### Address Admin (sem mudança de contrato, apenas autorização nova)

```
POST   /users/:userId/addresses          → 403 se não admin
GET    /users/:userId/addresses          → 403 se não admin
GET    /users/:userId/addresses/:id      → 403 se não admin
PUT    /users/:userId/addresses/:id      → 403 se não admin
DELETE /users/:userId/addresses/:id      → 403 se não admin
PATCH  /users/:userId/addresses/:id/default → 403 se não admin
```

### Address Self (novas rotas)

```
POST   /me/addresses                     → cria endereço do usuário logado
GET    /me/addresses                     → lista endereços do usuário logado
GET    /me/addresses/:id                 → busca endereço (valida que pertence ao user)
PUT    /me/addresses/:id                 → atualiza (valida que pertence ao user)
DELETE /me/addresses/:id                 → deleta (valida que pertence ao user)
PATCH  /me/addresses/:id/default         → define padrão
```

> **Segurança nas rotas com `:id`:** O use case já recebe `{ id, userId }`. Se o endereço não pertencer ao `userId` do token, o repositório não encontra o registro e o use case lança `AddressNotFoundError` → HTTP 404. O usuário não descobre que o endereço existe — sem vazamento de informação.

### Personal Data Admin (sem mudança de contrato, apenas autorização nova)

```
POST   /users/:userId/personal-data      → 403 se não admin
GET    /users/:userId/personal-data      → 403 se não admin
PUT    /users/:userId/personal-data      → 403 se não admin
```

### Personal Data Self (novas rotas)

```
POST   /me/personal-data                 → cria dados pessoais do usuário logado
GET    /me/personal-data                 → busca dados pessoais do usuário logado
PUT    /me/personal-data                 → atualiza dados pessoais do usuário logado
```

---

## 6. Impacto na Arquitetura

### Camadas afetadas

| Camada | O que muda |
|--------|-----------|
| **Domain** | Nada. Use cases e entidades não mudam. |
| **Application (use cases)** | Nada. A assinatura já aceita `userId: string`. |
| **Infrastructure (Prisma)** | Nada. Repositórios não mudam. |
| **HTTP (Presentation)** | Novo guard, novo decorator, dois novos controllers, registro nos modules. |

A Clean Architecture é preservada: a lógica de autorização fica na borda HTTP, não vaza para use cases ou repositórios.

### Novos arquivos

```
src/infra/http/modules/auth/guards/adminProfile.guard.ts
src/infra/http/modules/auth/decorators/currentUser.decorator.ts
src/infra/http/modules/address/meAddress.controller.ts
src/infra/http/modules/personalData/mePersonalData.controller.ts
```

### Arquivos modificados

```
src/infra/http/modules/address/address.controller.ts        → + @UseGuards(AdminProfileGuard)
src/infra/http/modules/address/address.module.ts            → + MeAddressController, AdminProfileGuard
src/infra/http/modules/personalData/personalData.controller.ts → + @UseGuards(AdminProfileGuard)
src/infra/http/modules/personalData/personalData.module.ts  → + MePersonalDataController, AdminProfileGuard
```

---

## 7. Segurança

| Vetor | Mitigação |
|-------|-----------|
| Usuário passa UUID de outro nas rotas `/me/:id` | Use case recebe `{ id, userId }` do token; repositório filtra por ambos → retorna 404 sem revelar existência |
| Usuário tenta acessar `/users/:userId/*` sem ser admin | `AdminProfileGuard` rejeita com 403 antes de qualquer processamento |
| Token forjado com `profileId` admin | JWT assinado com `JWT_SECRET`; impossível forjar sem a chave |
| `ADMIN_PROFILE_ID` não configurado | Guard retorna 403 para todos → fail-secure (nenhum usuário vira admin acidentalmente) |

---

## 8. Critérios de Aceitação

### Address — rotas admin (`/users/:userId/addresses`)
- [ ] `POST /users/:userId/addresses` retorna 403 para usuário sem perfil admin.
- [ ] `GET /users/:userId/addresses` retorna 403 para usuário sem perfil admin.
- [ ] `GET /users/:userId/addresses/:id` retorna 403 para usuário sem perfil admin.
- [ ] `PUT /users/:userId/addresses/:id` retorna 403 para usuário sem perfil admin.
- [ ] `DELETE /users/:userId/addresses/:id` retorna 403 para usuário sem perfil admin.
- [ ] `PATCH /users/:userId/addresses/:id/default` retorna 403 para usuário sem perfil admin.
- [ ] Todas as rotas acima retornam 200/204 para usuário com `profileId === ADMIN_PROFILE_ID`.

### Personal Data — rotas admin (`/users/:userId/personal-data`)
- [ ] `POST /users/:userId/personal-data` retorna 403 para usuário sem perfil admin.
- [ ] `GET /users/:userId/personal-data` retorna 403 para usuário sem perfil admin.
- [ ] `PUT /users/:userId/personal-data` retorna 403 para usuário sem perfil admin.
- [ ] Todas as rotas acima retornam 200 para usuário com `profileId === ADMIN_PROFILE_ID`.

### Address — rotas self (`/me/addresses`)
- [ ] `GET /me/addresses` retorna apenas endereços do usuário dono do token.
- [ ] `GET /me/addresses/:id` com ID de endereço de outro usuário retorna 404.
- [ ] `PUT /me/addresses/:id` com ID de endereço de outro usuário retorna 404.
- [ ] `DELETE /me/addresses/:id` com ID de endereço de outro usuário retorna 404.
- [ ] `PATCH /me/addresses/:id/default` com ID de endereço de outro usuário retorna 404.

### Personal Data — rotas self (`/me/personal-data`)
- [ ] `GET /me/personal-data` retorna apenas dados pessoais do usuário dono do token.
- [ ] `PUT /me/personal-data` atualiza apenas dados do usuário dono do token.

### Geral
- [ ] Nenhum use case ou repositório foi alterado.
- [ ] Todos os endpoints novos passam pelo `JwtAuthGuard` global (nenhum é público).

---

## 9. Fora do Escopo desta Iteração

- Rate limiting nas rotas `/me`.
- Rota `DELETE /me/personal-data` (exclusão de conta — fluxo separado).
- Listagem de todos os usuários com seus dados pelo admin (isso seria uma rota diferente).
