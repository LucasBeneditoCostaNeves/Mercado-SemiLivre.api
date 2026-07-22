import { Order, OrderItem } from '@prisma/client';

type OrderWithItems = Order & { items: OrderItem[] };

function toNumber(value: { toNumber(): number } | number): number {
  return typeof value === 'number' ? value : value.toNumber();
}

export class OrderViewModel {
  static toHTTP(order: OrderWithItems) {
    return {
      id: order.id,
      status: order.status,
      shippingCarrier: order.shippingCarrier,
      shippingService: order.shippingService,
      shippingPrice: toNumber(order.shippingPrice),
      totalAmount: toNumber(order.totalAmount),
      createdAt: order.createdAt,
      items: order.items.map((item) => ({
        id: item.id,
        productVariationId: item.productVariationId,
        title: item.title,
        imageUrl: item.imageUrl,
        quantity: item.quantity,
        unitPrice: toNumber(item.unitPrice),
      })),
    };
  }
}
