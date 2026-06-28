## Context

A API segue arquitetura NestJS com separação clara entre camada HTTP (`src/infra/http/modules/<domain>`) e domínio (`src/modules/<domain>`). Cada domínio tem `entities`, `repositories` (abstratos) e `useCases`. A validação de entrada usa Zod via `nestjs-zod`.

O schema Prisma está fragmentado em arquivos por domínio (`prisma/schema/`). O modelo `productVariationImages` não possui FK para `ProductVariation`, tornando as imagens órfãs. Isso deve ser corrigido antes da rota de seed.

## Goals / Non-Goals

**Goals:**
- Corrigir o schema Prisma adicionando `product_variation_id` em `productVariationImages`
- Criar rota `POST /seed/catalog` idempotente para Brands e Categories, transacional para tudo
- Inserir dados em cascata respeitando a ordem das FKs
- Retornar contagem de registros inseridos por entidade

**Non-Goals:**
- Idempotência completa para Products/Variations/Images/Reviews (sem proteção por `sku`)
- Autenticação/autorização da rota de seed (rota de desenvolvimento)
- Suporte a seed incremental ou rollback granular por produto

## Decisions

### 1. Módulo dedicado `seed` em vez de reutilizar módulos existentes

A lógica de seed é cross-cutting: toca Brand, CategoryProducts, Product, ProductVariation, productVariationImages e ReviewProduct em uma única operação. Criar um `SeedModule` isolado em `src/infra/http/modules/seed/` e um `SeedCatalogUseCase` em `src/modules/seed/` mantém os módulos de domínio inalterados e o seed descartável se necessário.

**Alternativa descartada**: adicionar o seed como use case em `src/modules/product/` — acoplaria um caso de uso operacional ao domínio de produto.

### 2. `prisma.$transaction([])` com lista de operações

Toda a inserção ocorre dentro de uma única transação Prisma, garantindo rollback completo em caso de falha em qualquer etapa. Usar o array interativo (`prisma.$transaction([op1, op2, ...])`) em vez do callback interativo (`prisma.$transaction(async (tx) => {...})`) é suficiente aqui e mais simples.

**Alternativa descartada**: transação com callback — mais poderosa mas desnecessária quando não há lógica condicional entre as operações.

### 3. Upsert por `name` para Brand e CategoryProducts; `create` para o restante

Brand e CategoryProducts devem ser idempotentes para permitir re-seed sem duplicatas. Product, ProductVariation, imagens e reviews usam `create` simples — re-seed intencional é possível, mas o PRD não exige proteção aqui.

### 4. Correção de schema: nova migration Prisma antes da rota

A adição de `product_variation_id` (NOT NULL) em `productVariationImages` é uma mudança de schema. Como a tabela provavelmente está vazia em desenvolvimento, não há dados a migrar. A migration deve incluir o campo, a constraint FK e os timestamps (que também estão ausentes no modelo atual).

### 5. Mapeamento de campos sem variações explícitas no JSON

O JSON não modela variações separadas. O próprio produto é tratado como variação única: `ProductVariation` herda `title`, `price`, `discountPercentage`, `description` e `stock` do objeto produto raiz.

## Risks / Trade-offs

- **Re-seed gera duplicatas em Product/Variation/Images/Reviews** → Aceitável para ambiente de desenvolvimento; documentar como limitação conhecida.
- **User fixo `789386c9-...` pode não existir no banco** → A transação vai falhar com FK violation. Mitigation: documentar no checklist pré-seed que o user deve existir.
- **Produtos sem `brand`** → Usar `"Generic"` como brand padrão; upsert garante que só um registro "Generic" seja criado.
- **Categorias em lowercase no JSON** → Capitalizar com `name[0].toUpperCase() + name.slice(1)` antes do upsert.
- **Volume da transação**: se o `docs-data.json` tiver centenas de produtos, uma única transação pode ser longa. Para desenvolvimento, aceitável.

## Migration Plan

1. Editar `prisma/schema/product.prisma`: adicionar `product_variation_id String` + relation + relação reversa em `ProductVariation`
2. Rodar `npx prisma migrate dev --name add-product-variation-fk-to-images`
3. Confirmar que user `789386c9-c335-484c-bf1d-931378d5fb34` existe no banco
4. Criar o módulo `seed` e registrar em `app.module.ts`
5. Testar com o arquivo `docs-data.json` local

## Open Questions

- Queremos proteger a rota de seed com uma guard básica (ex: header `x-seed-token`) para evitar chamadas acidentais em ambientes compartilhados?
- O campo `sku` em `Product` deve ser adicionado para permitir upsert idempotente no futuro?
