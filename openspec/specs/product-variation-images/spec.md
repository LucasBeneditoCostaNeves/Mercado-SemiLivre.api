### Requirement: Vínculo obrigatório de imagens a variações

O modelo `productVariationImages` SHALL possuir uma FK `product_variation_id` obrigatória apontando para `ProductVariation`, com `onDelete: Cascade`.

#### Scenario: Imagem criada com FK válida

- **WHEN** uma imagem de variação é inserida no banco
- **THEN** o registro contém `product_variation_id` referenciando um `ProductVariation` existente

#### Scenario: Deleção em cascata de imagens

- **WHEN** uma `ProductVariation` é deletada
- **THEN** todos os registros `productVariationImages` com `product_variation_id` correspondente são automaticamente deletados via cascade
