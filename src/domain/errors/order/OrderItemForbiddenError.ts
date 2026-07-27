export class OrderItemForbiddenError extends Error {
  constructor() {
    super('Acesso negado a este item de pedido');
    this.name = 'OrderItemForbiddenError';
  }
}
