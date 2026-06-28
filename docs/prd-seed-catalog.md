# PRD — Rota de Seed de Catálogo via JSON

## Contexto

Precisamos de uma rota de importação que receba um array de produtos no formato `docs-data.json` e cadastre em cascata os modelos: `Brand → CategoryProducts → Product → ProductVariation → productVariationImages → ReviewProduct`, respeitando dependências de FK para não quebrar na inserção.

---

## Observação de Schema — Problema Identificado

O modelo `productVariationImages` **não possui FK para `ProductVariation`**:

```prisma
model productVariationImages {
  id        String   @id @default(uuid())
  link      String
  // ❌ falta product_variation_id
}
```

As imagens ficariam desconectadas de qualquer variação. **Antes de implementar a rota, adicionar a FK:**

```prisma
model productVariationImages {
  id                   String           @id @default(uuid())
  link                 String
  product_variation_id String
  productVariation     ProductVariation @relation(fields: [product_variation_id], references: [id], onDelete: Cascade)
  createdAt            DateTime         @default(now())
  updatedAt            DateTime         @default(now())
}
```

E o reverso em `ProductVariation`:
```prisma
productVariationImages productVariationImages[]
```

---

## Rota

```
POST /seed/catalog
Content-Type: application/json
```

**Body** — mesmo formato do `docs-data.json`:
```json
{
  "products": [ ...array de produtos... ]
}
```

---

## Mapeamento JSON → Schema

### Ordem de inserção (respeita FKs)

```
1. Brand
2. CategoryProducts
3. Product
4. ProductVariation
5. productVariationImages
6. ReviewProduct
```

---

### 1. Brand

| Campo Prisma | Fonte JSON      | Regra                                     |
|--------------|-----------------|-------------------------------------------|
| `name`       | `product.brand` | Upsert por `name` para evitar duplicatas  |

**Edge case:** Produtos sem campo `brand` (ex: categorias de groceries). Solução: usar `"Generic"` como nome de brand padrão quando `brand` for `undefined/null`.

---

### 2. CategoryProducts

| Campo Prisma | Fonte JSON          | Regra                                                              |
|--------------|---------------------|--------------------------------------------------------------------|
| `name`       | `product.category`  | Upsert por `name`; capitalizar (`"beauty"` → `"Beauty"`)           |
| `status`     | —                   | `true` fixo                                                        |

---

### 3. Product

| Campo Prisma          | Fonte JSON                    | Regra                                                    |
|-----------------------|-------------------------------|----------------------------------------------------------|
| `title`               | `product.title`               |                                                          |
| `status`              | —                             | `true` fixo                                              |
| `category_product_id` | FK CategoryProducts           | Resolvido pela inserção na etapa 2                       |
| `seller_user_id`      | —                             | `789386c9-c335-484c-bf1d-931378d5fb34` fixo              |
| `brand_id`            | FK Brand                      | Resolvido pela inserção na etapa 1                       |
| `thumbnail`           | `product.thumbnail`           |                                                          |
| `warrantyInformation` | `product.warrantyInformation` |                                                          |

---

### 4. ProductVariation

O JSON não modela variações separadas — o próprio produto já é a variação única.

| Campo Prisma        | Fonte JSON                   | Regra                                   |
|---------------------|------------------------------|-----------------------------------------|
| `title`             | `product.title`              | Reutiliza o título do produto           |
| `discountPercentage`| `product.discountPercentage` |                                         |
| `price`             | `product.price`              |                                         |
| `quantity`          | `product.stock`              |                                         |
| `description`       | `product.description`        |                                         |
| `product_id`        | FK Product                   | Resolvido pela inserção na etapa 3      |
| `status`            | —                            | `true` fixo                             |

---

### 5. productVariationImages

Itera sobre `product.images[]`. Cada URL vira um registro.

| Campo Prisma          | Fonte JSON          | Regra                                  |
|-----------------------|---------------------|----------------------------------------|
| `link`                | `images[n]`         | Uma linha por URL                      |
| `product_variation_id`| FK ProductVariation | Resolvido pela inserção na etapa 4     |

---

### 6. ReviewProduct

Itera sobre `product.reviews[]`. Cada review vira um registro.

| Campo Prisma           | Fonte JSON           | Regra                                                                              |
|------------------------|----------------------|------------------------------------------------------------------------------------|
| `rating`               | `review.rating`      |                                                                                    |
| `comment`              | `review.comment`     |                                                                                    |
| `product_variation_id` | FK ProductVariation  | Resolvido pela inserção na etapa 4                                                 |
| `reviewer_id`          | —                    | `789386c9-c335-484c-bf1d-931378d5fb34` fixo (reviewers do JSON não existem no banco) |
| `createdAt`            | `review.date`        | Usar a data da review                                                              |

---

## Comportamento Esperado da Rota

- **Idempotência:** `Brand` e `CategoryProducts` usam `upsert` por `name`. `Product`, `ProductVariation`, imagens e reviews usam `create` (sem proteção contra re-seed, a menos que se adicione idempotência por `sku`).
- **Transação:** Toda a operação dentro de `prisma.$transaction([...])` para rollback em caso de falha parcial.
- **Resposta de sucesso:**

```json
{
  "inserted": {
    "brands": 10,
    "categories": 4,
    "products": 30,
    "variations": 30,
    "images": 67,
    "reviews": 90
  }
}
```

- **Resposta de erro:** HTTP 422 com mensagem descrevendo qual entidade falhou e qual campo causou o erro.

---

## Checklist de Pré-implementação

- [ ] Adicionar `product_variation_id` FK em `productVariationImages` no schema Prisma
- [ ] Rodar `prisma migrate dev` com essa alteração
- [ ] Confirmar que o user `789386c9-c335-484c-bf1d-931378d5fb34` existe no banco antes de rodar o seed
- [ ] Decidir se quer proteção contra re-seed (upsert por `sku` em `Product`)
