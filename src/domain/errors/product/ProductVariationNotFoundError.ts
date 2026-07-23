export class ProductVariationNotFoundError extends Error {
  constructor() {
    super('Variação de produto não encontrada');
    this.name = 'ProductVariationNotFoundError';
  }
}
