import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { GetAddressUseCase } from 'src/modules/address/useCases/getAddressUseCase/getAddressUseCase';
import { OrderNotFoundError } from 'src/domain/errors/order/OrderNotFoundError';
import { CouponService } from '../coupon/coupon.service';
import { PaymentGateway } from './gateway/PaymentGateway';
import { CheckoutSession, CheckoutSessionMetadata } from './order.types';

function toNumber(value: { toNumber(): number } | number): number {
  return typeof value === 'number' ? value : value.toNumber();
}

interface CreateCheckoutSessionRequest {
  userId: string;
  addressId: string;
  cartItemIds: string[];
  shippingCarrier: string;
  shippingService: string;
  shippingPrice: number;
  couponCode?: string;
}

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private paymentGateway: PaymentGateway,
    private getAddressUseCase: GetAddressUseCase,
    private couponService: CouponService,
  ) {}

  async createCheckoutSession(
    request: CreateCheckoutSessionRequest,
  ): Promise<CheckoutSession> {
    await this.getAddressUseCase.execute({
      id: request.addressId,
      userId: request.userId,
    });

    const cartItems = await this.prisma.cartItem.findMany({
      where: { id: { in: request.cartItemIds }, userId: request.userId },
      include: { productVariation: { include: { product: true } } },
    });

    let discountAmount: number | undefined;
    if (request.couponCode) {
      const validated = await this.couponService.validate(
        request.couponCode,
        cartItems.map((item) => item.id),
        request.userId,
      );
      discountAmount = validated.discountAmount;
    }

    return this.paymentGateway.createCheckoutSession({
      userId: request.userId,
      cartItemIds: cartItems.map((item) => item.id),
      shippingCarrier: request.shippingCarrier,
      shippingService: request.shippingService,
      shippingPrice: request.shippingPrice,
      couponCode: request.couponCode,
      discountAmount,
      items: cartItems.map((item) => ({
        productVariationId: item.productVariationId,
        title: `${item.productVariation.product.title} — ${item.productVariation.title}`,
        imageUrl: item.productVariation.product.thumbnail,
        quantity: item.quantity,
        unitPrice: toNumber(item.productVariation.price),
      })),
    });
  }

  async handleWebhookEvent(rawBody: Buffer, signature: string): Promise<void> {
    const event = await this.paymentGateway.parseWebhookEvent(
      rawBody,
      signature,
    );

    if (
      event.type === 'checkout.session.completed' &&
      event.paymentStatus === 'paid'
    ) {
      await this.createOrderFromSession(event.sessionId, event.metadata);
      return;
    }

    if (event.type === 'payment_intent.payment_failed') {
      await this.prisma.order.updateMany({
        where: { stripeSessionId: event.sessionId },
        data: { status: 'FAILED' },
      });
    }
  }

  async findBySessionId(sessionId: string, userId: string) {
    const order = await this.prisma.order.findUnique({
      where: { stripeSessionId: sessionId },
      include: { items: true },
    });

    if (!order || order.userId !== userId) throw new OrderNotFoundError();

    return order;
  }

  private async createOrderFromSession(
    sessionId: string,
    metadata: CheckoutSessionMetadata,
  ): Promise<void> {
    const existing = await this.prisma.order.findUnique({
      where: { stripeSessionId: sessionId },
    });
    if (existing) return;

    const cartItems = await this.prisma.cartItem.findMany({
      where: { id: { in: metadata.cartItemIds }, userId: metadata.userId },
      include: { productVariation: { include: { product: true } } },
    });

    const itemsTotal = cartItems.reduce(
      (sum, item) =>
        sum + toNumber(item.productVariation.price) * item.quantity,
      0,
    );

    const discountAmount = metadata.discountAmount ?? 0;

    const order = await this.prisma.order.create({
      data: {
        userId: metadata.userId,
        stripeSessionId: sessionId,
        status: 'PAID',
        shippingCarrier: metadata.shippingCarrier,
        shippingService: metadata.shippingService,
        shippingPrice: metadata.shippingPrice,
        totalAmount: Math.max(itemsTotal + metadata.shippingPrice - discountAmount, 0),
        items: {
          create: cartItems.map((item) => ({
            productVariationId: item.productVariationId,
            title: `${item.productVariation.product.title} — ${item.productVariation.title}`,
            imageUrl: item.productVariation.product.thumbnail,
            quantity: item.quantity,
            unitPrice: toNumber(item.productVariation.price),
          })),
        },
      },
    });

    await this.prisma.cartItem.deleteMany({
      where: { id: { in: metadata.cartItemIds }, userId: metadata.userId },
    });

    if (metadata.couponCode && metadata.discountAmount) {
      const coupon = await this.prisma.coupon.findUnique({
        where: { code: metadata.couponCode },
      });
      if (coupon) {
        await this.couponService.registerUsage(
          coupon.id,
          metadata.userId,
          order.id,
          metadata.discountAmount,
        );
      }
    }
  }
}
