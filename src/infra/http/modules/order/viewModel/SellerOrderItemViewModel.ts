import { SellerOrderGroup } from '../order.types';
import { FulfillmentItemViewModel } from './FulfillmentItemViewModel';

export class SellerOrderItemViewModel {
  static toHTTP(group: SellerOrderGroup) {
    return {
      orderId: group.orderId,
      createdAt: group.createdAt,
      buyerName: group.buyerName,
      shippingAddress: group.shippingAddress,
      items: group.items.map((item) => FulfillmentItemViewModel.toHTTP(item)),
    };
  }
}
