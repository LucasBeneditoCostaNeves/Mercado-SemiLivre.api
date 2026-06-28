## 1. Correção de Schema Prisma

- [x] 1.1 Editar `prisma/schema/product.prisma`: adicionar campo `product_variation_id String`, a relation `productVariation ProductVariation @relation(fields: [product_variation_id], references: [id], onDelete: Cascade)` e os campos `createdAt`/`updatedAt` no modelo `productVariationImages`
- [x] 1.2 Editar `prisma/schema/product.prisma`: adicionar relação reversa `productVariationImages productVariationImages[]` no modelo `ProductVariation`
- [x] 1.3 Rodar `npx prisma migrate dev --name add-product-variation-fk-to-images` e confirmar que a migration foi criada sem erros
- [x] 1.4 Rodar `npx prisma generate` para regenerar o Prisma Client

## 2. Módulo de Domínio: SeedCatalogUseCase

- [x] 2.1 Criar diretório `src/modules/seed/useCases/seedCatalogUseCase/`
- [x] 2.2 Criar `seedCatalogUseCase.ts` com a lógica de inserção em cascata: iterar os produtos e montar o array de operações `prisma.brand.upsert`, `prisma.categoryProducts.upsert`, `prisma.product.create`, `prisma.productVariation.create`, `prisma.productVariationImages.create` (por imagem) e `prisma.reviewProduct.create` (por review)
- [x] 2.3 Envolver todas as operações em `prisma.$transaction([...])` e retornar as contagens `{ brands, categories, products, variations, images, reviews }`
- [x] 2.4 Aplicar regra de brand padrão: usar `"Generic"` quando `product.brand` for `undefined` ou `null`
- [x] 2.5 Aplicar capitalização de categoria: `category[0].toUpperCase() + category.slice(1)` antes do upsert

## 3. Camada HTTP: SeedController e SeedModule

- [x] 3.1 Criar diretório `src/infra/http/modules/seed/`
- [x] 3.2 Criar DTO Zod `src/infra/http/modules/seed/dtos/seedCatalog.dto.ts` com o schema do body `{ products: [...] }` mapeando os campos usados (title, brand, category, price, discountPercentage, stock, description, thumbnail, warrantyInformation, images, reviews)
- [x] 3.3 Criar `src/infra/http/modules/seed/seed.controller.ts` com `@Post('catalog')` que chama `SeedCatalogUseCase.execute(body.products)` e retorna `{ inserted: { ... } }`
- [x] 3.4 Criar `src/infra/http/modules/seed/seed.module.ts` declarando o controller, importando `PrismaModule` (ou o provider do Prisma) e provendo o `SeedCatalogUseCase`
- [x] 3.5 Registrar `SeedModule` em `src/app.module.ts`

## 4. Validação e Tratamento de Erros

- [x] 4.1 Garantir que erros de inserção (FK violation, tipo inválido) sejam capturados e retornados como HTTP 422 com mensagem descritiva — usar exception filter existente ou adicionar `try/catch` no use case que lança `UnprocessableEntityException` do NestJS

## 5. Verificação Manual

- [x] 5.1 Confirmar que o user `789386c9-c335-484c-bf1d-931378d5fb34` existe no banco local
- [x] 5.2 Fazer `POST /seed/catalog` com o conteúdo do `docs-data.json` e verificar a resposta com as contagens esperadas (brands: ~10, categories: ~4, products: ~30, variations: ~30, images: ~67, reviews: ~90)
- [x] 5.3 Verificar no banco que `productVariationImages` possui registros com `product_variation_id` preenchido
