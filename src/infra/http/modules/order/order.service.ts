import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { GetAddressUseCase } from 'src/modules/address/useCases/getAddressUseCase/getAddressUseCase';
import { OrderNotFoundError } from 'src/domain/errors/order/OrderNotFoundError';
import { CouponService } from '../coupon/coupon.service';
import { PaymentGateway } from './gateway/PaymentGateway';
import {
  CheckoutSession,
  CheckoutSessionMetadata,
  SellerSalesPeriod,
  SellerSalesSummary,
  SellerTopProduct,
} from './order.types';

const PERIOD_DAYS: Record<SellerSalesPeriod, number> = {
  '7d': 7,
  '30d': 30,
  '90d': 90,
};

const TOP_PRODUCTS_LIMIT = 5;

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

  async getSellerSalesSummary(
    sellerUserId: string,
    period: SellerSalesPeriod,
  ): Promise<SellerSalesSummary> {
    const since = new Date();
    since.setDate(since.getDate() - PERIOD_DAYS[period]);

    const variations = await this.prisma.productVariation.findMany({
      where: { product: { seller_user_id: sellerUserId } },
      select: {
        id: true,
        product: { select: { id: true, title: true, thumbnail: true } },
      },
    });

    const variationToProduct = new Map(
      variations.map((variation) => [variation.id, variation.product]),
    );

    const items = await this.prisma.orderItem.findMany({
      where: {
        order: { status: 'PAID', createdAt: { gte: since } },
        productVariationId: { in: Array.from(variationToProduct.keys()) },
      },
    });

    let totalRevenue = 0;
    let itemsSold = 0;
    const orderIds = new Set<string>();
    const productTotals = new Map<string, SellerTopProduct>();

    for (const item of items) {
      const product = variationToProduct.get(item.productVariationId);
      if (!product) continue;

      const revenue = toNumber(item.unitPrice) * item.quantity;
      totalRevenue += revenue;
      itemsSold += item.quantity;
      orderIds.add(item.orderId);

      const current = productTotals.get(product.id);
      if (current) {
        current.quantitySold += item.quantity;
        current.revenue += revenue;
      } else {
        productTotals.set(product.id, {
          productId: product.id,
          title: product.title,
          thumbnail: product.thumbnail,
          quantitySold: item.quantity,
          revenue,
        });
      }
    }

    const orderCount = orderIds.size;
    const topProducts = Array.from(productTotals.values())
      .sort((a, b) => b.quantitySold - a.quantitySold)
      .slice(0, TOP_PRODUCTS_LIMIT);

    return {
      period,
      totalRevenue,
      orderCount,
      itemsSold,
      averageTicket: orderCount > 0 ? totalRevenue / orderCount : 0,
      topProducts,
    };
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
        totalAmount: Math.max(
          itemsTotal + metadata.shippingPrice - discountAmount,
          0,
        ),
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
