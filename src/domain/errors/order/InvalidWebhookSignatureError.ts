export class InvalidWebhookSignatureError extends Error {
  constructor() {
    super('Assinatura do webhook inválida');
    this.name = 'InvalidWebhookSignatureError';
  }
}
