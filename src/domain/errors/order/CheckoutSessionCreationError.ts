export class CheckoutSessionCreationError extends Error {
  constructor() {
    super('Não foi possível iniciar o pagamento, tente novamente em instantes');
    this.name = 'CheckoutSessionCreationError';
  }
}
