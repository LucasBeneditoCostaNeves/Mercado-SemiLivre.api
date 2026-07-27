import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { GetAddressUseCase } from 'src/modules/address/useCases/getAddressUseCase/getAddressUseCase';
import { OrderNotFoundError } from 'src/domain/errors/order/OrderNotFoundError';
import { OrderItemForbiddenError } from 'src/domain/errors/order/OrderItemForbiddenError';
import { InvalidFulfillmentTransitionError } from 'src/domain/errors/order/InvalidFulfillmentTransitionError';
import { OrderItemReviewAlreadyExistsError } from 'src/domain/errors/order/OrderItemReviewAlreadyExistsError';
import { CouponService } from '../coupon/coupon.service';
import { PaymentGateway } from './gateway/PaymentGateway';
import {
  CheckoutSession,
  CheckoutSessionMetadata,
  CreateOrderItemReviewInput,
  CustomerOrder,
  FulfillmentItem,
  FulfillmentStatus,
  OrderItemReview,
  SellerOrderGroup,
  SellerSalesPeriod,
  SellerSalesSummary,
  SellerTopProduct,
} from './order.types';

const SELLER_NEXT_STATUS: Partial<Record<FulfillmentStatus, FulfillmentStatus>> =
  {
    PENDING: 'IN_PRODUCTION',
    IN_PRODUCTION: 'SHIPPED',
  };

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
      addressId: request.addressId,
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

  async getSellerOrderItems(sellerUserId: string): Promise<SellerOrderGroup[]> {
    const variations = await this.prisma.productVariation.findMany({
      where: { product: { seller_user_id: sellerUserId } },
      select: { id: true },
    });
    const variationIds = variations.map((variation) => variation.id);
    if (variationIds.length === 0) return [];

    const items = await this.prisma.orderItem.findMany({
      where: {
        productVariationId: { in: variationIds },
        order: { status: 'PAID' },
      },
      include: { order: { include: { user: true } } },
      orderBy: { order: { createdAt: 'desc' } },
    });

    const groups = new Map<string, SellerOrderGroup>();
    for (const item of items) {
      let group = groups.get(item.orderId);
      if (!group) {
        group = {
          orderId: item.order.id,
          createdAt: item.order.createdAt,
          buyerName: `${item.order.user.name} ${item.order.user.lastName}`.trim(),
          shippingAddress: {
            cep: item.order.shippingCep,
            state: item.order.shippingState,
            city: item.order.shippingCity,
            street: item.order.shippingStreet,
            number: item.order.shippingNumber,
            complement: item.order.shippingComplement,
          },
          items: [],
        };
        groups.set(item.orderId, group);
      }
      group.items.push(this.toFulfillmentItem(item));
    }

    return Array.from(groups.values());
  }

  async advanceOrderItem(
    itemId: string,
    sellerUserId: string,
  ): Promise<FulfillmentItem> {
    const item = await this.prisma.orderItem.findUnique({
      where: { id: itemId },
    });
    if (!item) throw new OrderNotFoundError();

    const variation = await this.prisma.productVariation.findUnique({
      where: { id: item.productVariationId },
      select: { product: { select: { seller_user_id: true } } },
    });
    if (!variation || variation.product.seller_user_id !== sellerUserId) {
      throw new OrderItemForbiddenError();
    }

    const next = SELLER_NEXT_STATUS[item.fulfillmentStatus];
    if (!next) throw new InvalidFulfillmentTransitionError();

    const updated = await this.prisma.orderItem.update({
      where: { id: itemId },
      data: {
        fulfillmentStatus: next,
        ...(next === 'IN_PRODUCTION' ? { inProductionAt: new Date() } : {}),
        ...(next === 'SHIPPED' ? { shippedAt: new Date() } : {}),
      },
    });

    return this.toFulfillmentItem(updated);
  }

  async receiveOrderItem(
    itemId: string,
    userId: string,
  ): Promise<FulfillmentItem> {
    const item = await this.prisma.orderItem.findUnique({
      where: { id: itemId },
      include: { order: { select: { userId: true } } },
    });
    if (!item) throw new OrderNotFoundError();
    if (item.order.userId !== userId) throw new OrderItemForbiddenError();
    if (item.fulfillmentStatus !== 'SHIPPED') {
      throw new InvalidFulfillmentTransitionError();
    }

    const updated = await this.prisma.orderItem.update({
      where: { id: itemId },
      data: { fulfillmentStatus: 'RECEIVED', receivedAt: new Date() },
    });

    return this.toFulfillmentItem(updated);
  }

  async getMyOrders(userId: string): Promise<CustomerOrder[]> {
    const orders = await this.prisma.order.findMany({
      where: { userId, status: 'PAID' },
      include: { items: { include: { review: true } } },
      orderBy: { createdAt: 'desc' },
    });

    return orders.map((order) => ({
      id: order.id,
      status: order.status,
      shippingCarrier: order.shippingCarrier,
      shippingService: order.shippingService,
      shippingPrice: toNumber(order.shippingPrice),
      totalAmount: toNumber(order.totalAmount),
      createdAt: order.createdAt,
      items: order.items.map((item) =>
        this.toFulfillmentItem(item, item.review),
      ),
    }));
  }

  async createOrderItemReview(
    input: CreateOrderItemReviewInput,
  ): Promise<OrderItemReview> {
    const item = await this.prisma.orderItem.findUnique({
      where: { id: input.orderItemId },
      include: { order: { select: { userId: true } }, review: true },
    });
    if (!item) throw new OrderNotFoundError();
    if (item.order.userId !== input.userId) {
      throw new OrderItemForbiddenError();
    }
    if (item.fulfillmentStatus !== 'RECEIVED') {
      throw new InvalidFulfillmentTransitionError();
    }
    if (item.review) throw new OrderItemReviewAlreadyExistsError();

    const review = await this.prisma.reviewProduct.create({
      data: {
        rating: input.rating,
        comment: input.comment ?? '',
        product_variation_id: item.productVariationId,
        reviewer_id: input.userId,
        order_item_id: item.id,
      },
    });

    return {
      id: review.id,
      rating: toNumber(review.rating),
      comment: review.comment || null,
    };
  }

  private toFulfillmentItem(
    item: {
      id: string;
      productVariationId: string;
      title: string;
      imageUrl: string;
      quantity: number;
      unitPrice: { toNumber(): number } | number;
      fulfillmentStatus: FulfillmentStatus;
      inProductionAt: Date | null;
      shippedAt: Date | null;
      receivedAt: Date | null;
    },
    review?: { id: string; rating: { toNumber(): number } | number } | null,
  ): FulfillmentItem {
    return {
      id: item.id,
      productVariationId: item.productVariationId,
      title: item.title,
      imageUrl: item.imageUrl,
      quantity: item.quantity,
      unitPrice: toNumber(item.unitPrice),
      fulfillmentStatus: item.fulfillmentStatus,
      inProductionAt: item.inProductionAt,
      shippedAt: item.shippedAt,
      receivedAt: item.receivedAt,
      reviewed: !!review,
      reviewId: review?.id ?? null,
      reviewRating: review ? toNumber(review.rating) : null,
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

    const address = metadata.addressId
      ? await this.prisma.address.findUnique({
          where: { id: metadata.addressId },
        })
      : null;

    const order = await this.prisma.order.create({
      data: {
        userId: metadata.userId,
        stripeSessionId: sessionId,
        status: 'PAID',
        shippingCarrier: metadata.shippingCarrier,
        shippingService: metadata.shippingService,
        shippingPrice: metadata.shippingPrice,
        shippingCep: address?.cep ?? null,
        shippingState: address?.state ?? null,
        shippingCity: address?.city ?? null,
        shippingStreet: address?.street ?? null,
        shippingNumber: address?.number ?? null,
        shippingComplement: address?.complement ?? null,
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
