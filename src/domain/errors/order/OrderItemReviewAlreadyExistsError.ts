export class OrderItemReviewAlreadyExistsError extends Error {
  constructor() {
    super('Este item de pedido já foi avaliado');
    this.name = 'OrderItemReviewAlreadyExistsError';
  }
}
