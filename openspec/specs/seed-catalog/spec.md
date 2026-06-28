### Requirement: Rota de seed de catálogo

O sistema SHALL expor um endpoint `POST /seed/catalog` que aceita um array de produtos no formato do `docs-data.json` e insere em cascata os modelos Brand → CategoryProducts → Product → ProductVariation → productVariationImages → ReviewProduct dentro de uma única transação Prisma.

#### Scenario: Seed bem-sucedido com produtos válidos

- **WHEN** uma requisição `POST /seed/catalog` é recebida com body `{ "products": [...] }` contendo produtos válidos
- **THEN** o sistema insere todos os registros na ordem Brand → CategoryProducts → Product → ProductVariation → productVariationImages → ReviewProduct dentro de uma transação
- **THEN** o sistema retorna HTTP 201 com JSON `{ "inserted": { "brands": N, "categories": N, "products": N, "variations": N, "images": N, "reviews": N } }` com as contagens de registros processados

#### Scenario: Falha parcial causa rollback completo

- **WHEN** uma requisição `POST /seed/catalog` é recebida e qualquer inserção dentro da transação falha (ex: FK violation)
- **THEN** o sistema realiza rollback de todas as operações da transação
- **THEN** o sistema retorna HTTP 422 com mensagem descrevendo qual entidade falhou e qual campo causou o erro

### Requirement: Idempotência de Brand e CategoryProducts

O sistema SHALL usar `upsert` por `name` ao inserir Brand e CategoryProducts, garantindo que re-seeds não criem entradas duplicadas para marcas e categorias já existentes.

#### Scenario: Re-seed não duplica marcas existentes

- **WHEN** o seed é executado com produtos cuja `brand` já existe no banco
- **THEN** o sistema reutiliza a Brand existente via upsert e não cria um novo registro

#### Scenario: Produto sem campo brand usa "Generic"

- **WHEN** um produto no payload não possui o campo `brand` (undefined ou null)
- **THEN** o sistema usa `"Generic"` como nome de Brand para esse produto

### Requirement: Normalização de categoria

O sistema SHALL capitalizar o nome de CategoryProducts antes do upsert, convertendo o primeiro caractere para maiúsculo.

#### Scenario: Categoria em lowercase é capitalizada

- **WHEN** o campo `category` do produto no payload está em lowercase (ex: `"beauty"`)
- **THEN** o sistema insere/upserta a categoria com nome capitalizado (`"Beauty"`)

### Requirement: Mapeamento produto-variação

O sistema SHALL criar exatamente um `ProductVariation` por produto no payload, usando os campos do produto raiz como campos da variação.

#### Scenario: Uma variação por produto

- **WHEN** um produto é processado no seed
- **THEN** o sistema cria um único `ProductVariation` com `title`, `discountPercentage`, `price`, `quantity` (de `stock`) e `description` extraídos do objeto produto

### Requirement: Inserção de imagens por variação

O sistema SHALL criar um registro `productVariationImages` para cada URL em `product.images[]`, vinculado à `ProductVariation` criada.

#### Scenario: Múltiplas imagens por variação

- **WHEN** um produto possui `N` URLs em `product.images[]`
- **THEN** o sistema cria `N` registros `productVariationImages`, cada um com `link` = a URL correspondente e `product_variation_id` = ID da variação recém-criada

### Requirement: Inserção de reviews por variação

O sistema SHALL criar um registro `ReviewProduct` para cada item em `product.reviews[]`, usando o `reviewer_id` fixo `789386c9-c335-484c-bf1d-931378d5fb34`.

#### Scenario: Reviews vinculadas à variação com reviewer fixo

- **WHEN** um produto possui reviews em `product.reviews[]`
- **THEN** o sistema cria um `ReviewProduct` por review com `rating`, `comment`, `createdAt` (de `review.date`) e `reviewer_id = "789386c9-c335-484c-bf1d-931378d5fb34"`
