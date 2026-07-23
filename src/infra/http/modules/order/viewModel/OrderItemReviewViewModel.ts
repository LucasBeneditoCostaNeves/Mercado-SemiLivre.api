import { OrderItemReview } from '../order.types';

export class OrderItemReviewViewModel {
  static toHTTP(review: OrderItemReview) {
    return {
      id: review.id,
      rating: review.rating,
      comment: review.comment,
    };
  }
}
