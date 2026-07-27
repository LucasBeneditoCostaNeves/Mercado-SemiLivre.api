import { CustomerOrder } from '../order.types';
import { FulfillmentItemViewModel } from './FulfillmentItemViewModel';

export class CustomerOrderViewModel {
  static toHTTP(order: CustomerOrder) {
    return {
      id: order.id,
      status: order.status,
      shippingCarrier: order.shippingCarrier,
      shippingService: order.shippingService,
      shippingPrice: order.shippingPrice,
      totalAmount: order.totalAmount,
      createdAt: order.createdAt,
      items: order.items.map((item) => FulfillmentItemViewModel.toHTTP(item)),
    };
  }
}
