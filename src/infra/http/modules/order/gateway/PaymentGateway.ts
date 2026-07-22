import {
  CheckoutSession,
  CreateCheckoutSessionInput,
  PaymentWebhookEvent,
} from '../order.types';

export abstract class PaymentGateway {
  abstract createCheckoutSession(
    input: CreateCheckoutSessionInput,
  ): Promise<CheckoutSession>;
  abstract parseWebhookEvent(
    rawBody: Buffer,
    signature: string,
  ): Promise<PaymentWebhookEvent>;
}
