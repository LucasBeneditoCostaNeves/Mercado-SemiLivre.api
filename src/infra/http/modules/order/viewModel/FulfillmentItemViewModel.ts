import { FulfillmentItem } from '../order.types';

export class FulfillmentItemViewModel {
  static toHTTP(item: FulfillmentItem) {
    return {
      id: item.id,
      productVariationId: item.productVariationId,
      title: item.title,
      imageUrl: item.imageUrl,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      fulfillmentStatus: item.fulfillmentStatus,
      inProductionAt: item.inProductionAt,
      shippedAt: item.shippedAt,
      receivedAt: item.receivedAt,
      reviewed: item.reviewed,
      reviewId: item.reviewId,
      reviewRating: item.reviewRating,
    };
  }
}
