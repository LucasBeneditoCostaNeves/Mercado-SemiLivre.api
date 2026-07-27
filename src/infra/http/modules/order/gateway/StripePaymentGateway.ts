import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { InvalidWebhookSignatureError } from 'src/domain/errors/order/InvalidWebhookSignatureError';
import { CheckoutSessionCreationError } from 'src/domain/errors/order/CheckoutSessionCreationError';
import { PaymentGateway } from './PaymentGateway';
import {
  CheckoutSession,
  CheckoutSessionMetadata,
  CreateCheckoutSessionInput,
  PaymentWebhookEvent,
} from '../order.types';

@Injectable()
export class StripePaymentGateway extends PaymentGateway {
  private readonly stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

  async createCheckoutSession(
    input: CreateCheckoutSessionInput,
  ): Promise<CheckoutSession> {
    const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:3000';

    const productLineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      input.items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: 'brl',
          unit_amount: Math.round(item.unitPrice * 100),
          product_data: {
            name: item.title,
            images: /^https?:\/\//i.test(item.imageUrl)
              ? [item.imageUrl]
              : undefined,
          },
        },
      }));

    const shippingLineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
      quantity: 1,
      price_data: {
        currency: 'brl',
        unit_amount: Math.round(input.shippingPrice * 100),
        product_data: {
          name: `Frete — ${input.shippingCarrier} ${input.shippingService}`,
        },
      },
    };

    let discounts: Stripe.Checkout.SessionCreateParams.Discount[] | undefined;
    if (input.couponCode && input.discountAmount && input.discountAmount > 0) {
      const stripeCoupon = await this.stripe.coupons.create({
        amount_off: Math.round(input.discountAmount * 100),
        currency: 'brl',
        duration: 'once',
        name: input.couponCode,
      });
      discounts = [{ coupon: stripeCoupon.id }];
    }

    try {
      const session = await this.stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [...productLineItems, shippingLineItem],
        discounts,
        success_url: `${frontendUrl}/checkout/confirmacao?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${frontendUrl}/checkout/pagamento`,
        metadata: {
          userId: input.userId,
          addressId: input.addressId,
          cartItemIds: input.cartItemIds.join(','),
          shippingCarrier: input.shippingCarrier,
          shippingService: input.shippingService,
          shippingPrice: String(input.shippingPrice),
          couponCode: input.couponCode ?? '',
          discountAmount: input.discountAmount
            ? String(input.discountAmount)
            : '',
        },
      });

      if (!session.url) {
        throw new CheckoutSessionCreationError();
      }

      return { id: session.id, url: session.url };
    } catch (error) {
      if (error instanceof CheckoutSessionCreationError) throw error;
      throw new CheckoutSessionCreationError();
    }
  }

  async parseWebhookEvent(
    rawBody: Buffer,
    signature: string,
  ): Promise<PaymentWebhookEvent> {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET ?? '';

    let event: Stripe.Event;
    try {
      event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        webhookSecret,
      );
    } catch {
      throw new InvalidWebhookSignatureError();
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const metadata = this.parseMetadata(session.metadata);
      if (!metadata) return { type: 'unhandled' };

      return {
        type: 'checkout.session.completed',
        sessionId: session.id,
        paymentStatus: session.payment_status,
        metadata,
      };
    }

    if (event.type === 'payment_intent.payment_failed') {
      const paymentIntent = event.data.object;
      const sessions = await this.stripe.checkout.sessions.list({
        payment_intent: paymentIntent.id,
        limit: 1,
      });
      const session = sessions.data[0];
      if (!session) return { type: 'unhandled' };

      return { type: 'payment_intent.payment_failed', sessionId: session.id };
    }

    return { type: 'unhandled' };
  }

  private parseMetadata(
    metadata: Stripe.Metadata | null,
  ): CheckoutSessionMetadata | null {
    if (!metadata?.userId || !metadata.cartItemIds) return null;

    return {
      userId: metadata.userId,
      addressId: metadata.addressId ?? '',
      cartItemIds: metadata.cartItemIds.split(',').filter(Boolean),
      shippingCarrier: metadata.shippingCarrier ?? '',
      shippingService: metadata.shippingService ?? '',
      shippingPrice: Number(metadata.shippingPrice ?? 0),
      couponCode: metadata.couponCode || undefined,
      discountAmount: metadata.discountAmount
        ? Number(metadata.discountAmount)
        : undefined,
    };
  }
}
