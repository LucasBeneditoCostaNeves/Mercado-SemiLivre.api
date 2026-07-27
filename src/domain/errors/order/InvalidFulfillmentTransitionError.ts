export class InvalidFulfillmentTransitionError extends Error {
  constructor() {
    super('Transição de status inválida para este item');
    this.name = 'InvalidFulfillmentTransitionError';
  }
}
