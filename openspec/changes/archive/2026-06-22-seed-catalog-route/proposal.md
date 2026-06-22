## Why

O banco de dados de desenvolvimento está vazio e não há forma de populá-lo com dados representativos do domínio. Sem um catálogo de produtos real, é impossível desenvolver e testar features de listagem, busca, variações e reviews de forma significativa.

## What Changes

- Nova rota `POST /seed/catalog` que aceita um array de produtos no formato `docs-data.json` e os insere em cascata no banco
- Correção de schema: adição de FK `product_variation_id` em `productVariationImages` (campo faltante que desconectava imagens das variações)
- Migration Prisma correspondente à correção de schema

## Capabilities

### New Capabilities

- `seed-catalog`: Rota de importação em massa que processa produtos e insere, em ordem de FK, os modelos Brand → CategoryProducts → Product → ProductVariation → productVariationImages → ReviewProduct dentro de uma única transação Prisma

### Modified Capabilities

- `product-variation-images`: Adição da FK `product_variation_id` no modelo `productVariationImages` — mudança de requisito de schema (imagens passam a ser obrigatoriamente vinculadas a uma variação)

## Impact

- **Schema Prisma**: modelo `productVariationImages` recebe campo `product_variation_id` + relation + timestamps; modelo `ProductVariation` recebe relação reversa `productVariationImages[]`
- **Migration**: `prisma migrate dev` necessário antes de qualquer seed
- **Nova rota**: `src/routes/seed/` ou módulo equivalente no NestJS/Express da API
- **Dependência de dados**: requer que o user `789386c9-c335-484c-bf1d-931378d5fb34` exista no banco (usado como `seller_user_id` e `reviewer_id` fixo)
