## Context

As rotas de `Address` e `PersonalData` existem desde a feature `user-personal-data-and-address` e todas usam `/:userId/` na URL sem nenhuma verificação de quem é o chamador. O token JWT (gerado por `JwtStrategy`) já carrega `id`, `email`, `name`, `createdAt` e `profileId`. A variável `ADMIN_PROFILE_ID` já existe no ambiente e já é usada pelo `UserAuthorizationPolicyImpl` para proteger atualizações de usuário — o padrão está estabelecido, só precisa ser estendido para os novos módulos.

## Goals / Non-Goals

**Goals:**
- Restringir todas as rotas `/:userId/addresses` e `/:userId/personal-data` a admins via guard reutilizável.
- Expor rotas `/me/addresses` e `/me/personal-data` para usuários comuns sem expor IDs na URL.
- Manter use cases e repositórios intocados.
- Fail-secure: se `ADMIN_PROFILE_ID` não estiver configurado, nenhum usuário passa pelo guard.

**Non-Goals:**
- Sistema de roles/permissões genérico.
- Alterar lógica de negócio ou modelo de dados.
- Rate limiting, audit log ou 2FA.

## Decisions

### 1. `AdminProfileGuard` como guard NestJS separado (não middleware)

**Escolhido:** `CanActivate` decorator aplicado no nível do controller (`@UseGuards(AdminProfileGuard)`).  
**Por que não middleware:** Middleware em NestJS não tem acesso ao `ExecutionContext` tipado e não é facilmente combinável com guards existentes. O `JwtAuthGuard` global já popula `request.user` antes do guard local ser executado — a sequência é garantida pelo ciclo de vida do NestJS.  
**Por que não `@Roles` / `@SetMetadata`:** Adicionar um sistema de metadata/roles seria over-engineering para uma única regra binária (admin ou não). Um guard simples é mais legível e não cria abstração desnecessária.

### 2. Decorator `@CurrentUser` em vez de `@Req()`

**Escolhido:** `createParamDecorator` que extrai `request.user` e retorna tipado como `AuthenticatedUser`.  
**Por que não `@Req() req: AuthRequestModel`:** Injetar o objeto `Request` inteiro no controller cria acoplamento à infraestrutura HTTP e dificulta testes unitários. O decorator isola essa dependência e é reaproveitável em qualquer controller futuro.

### 3. Novos controllers, não novos métodos no controller existente

**Escolhido:** `MeAddressController` e `MePersonalDataController` como classes separadas registradas no mesmo módulo.  
**Por que não adicionar rotas `/me/*` no controller existente:** O controller admin tem `@UseGuards(AdminProfileGuard)` no nível da classe. Misturar rotas com autorizações diferentes no mesmo controller violaria o princípio da responsabilidade única. Controllers separados deixam a intenção explícita.

### 4. Segurança das rotas `/me/:id` via filtragem no use case (sem guard adicional)

**Escolhido:** Os use cases de get/update/delete de endereços já recebem `{ id, userId }`. O repositório filtra por ambos — se o endereço não pertencer ao usuário do token, retorna `AddressNotFoundError` → HTTP 404.  
**Por que não verificar ownership no controller:** Colocar a verificação no controller vazaria lógica de negócio para a camada HTTP. A filtragem `WHERE id = ? AND userId = ?` no repositório é a forma correta dentro da Clean Architecture.  
**Trade-off:** O 404 (em vez de 403) não revela a existência do recurso — comportamento intencional de segurança (information hiding).

## Risks / Trade-offs

| Risco | Mitigação |
|-------|-----------|
| `ADMIN_PROFILE_ID` não configurado → nenhum admin consegue acessar rotas admin | Comportamento intencional (fail-secure); documentar como variável obrigatória em produção |
| Token com `profileId` desatualizado após mudança de perfil | Token tem validade de 30 dias; no pior caso, re-login resolve; aceitável para v1 |
| Dois controllers por módulo podem gerar confusão | Convenção de nomenclatura `Me<Resource>Controller` deixa claro o papel de cada um |

## Migration Plan

1. Criar o guard e o decorator (sem efeito colateral).
2. Aplicar `@UseGuards(AdminProfileGuard)` nos controllers existentes — os testes de integração existentes devem falhar para rotas que hoje passam sem admin; corrigir os testes.
3. Criar os novos controllers `/me` e registrá-los nos modules.
4. Atualizar a coleção do Insomnia com as novas rotas.
5. Deploy sem migração de banco (nenhuma mudança de schema).
