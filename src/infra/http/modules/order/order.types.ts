export interface CheckoutLineItem {
  productVariationId: string;
  title: string;
  imageUrl: string;
  quantity: number;
  unitPrice: number;
}

export interface CreateCheckoutSessionInput {
  userId: string;
  addressId: string;
  cartItemIds: string[];
  items: CheckoutLineItem[];
  shippingCarrier: string;
  shippingService: string;
  shippingPrice: number;
  couponCode?: string;
  discountAmount?: number;
}

export interface CheckoutSession {
  id: string;
  url: string;
}

export interface CheckoutSessionMetadata {
  userId: string;
  addressId: string;
  cartItemIds: string[];
  shippingCarrier: string;
  shippingService: string;
  shippingPrice: number;
  couponCode?: string;
  discountAmount?: number;
}

export type SellerSalesPeriod = '7d' | '30d' | '90d';

export interface SellerTopProduct {
  productId: string;
  title: string;
  thumbnail: string;
  quantitySold: number;
  revenue: number;
}

export interface SellerSalesSummary {
  period: SellerSalesPeriod;
  totalRevenue: number;
  orderCount: number;
  itemsSold: number;
  averageTicket: number;
  topProducts: SellerTopProduct[];
}

export type FulfillmentStatus =
  | 'PENDING'
  | 'IN_PRODUCTION'
  | 'SHIPPED'
  | 'RECEIVED';

export interface ShippingAddressSnapshot {
  cep: string | null;
  state: string | null;
  city: string | null;
  street: string | null;
  number: string | null;
  complement: string | null;
}

export interface FulfillmentItem {
  id: string;
  productVariationId: string;
  title: string;
  imageUrl: string;
  quantity: number;
  unitPrice: number;
  fulfillmentStatus: FulfillmentStatus;
  inProductionAt: Date | null;
  shippedAt: Date | null;
  receivedAt: Date | null;
  reviewed: boolean;
  reviewId: string | null;
  reviewRating: number | null;
}

export interface CreateOrderItemReviewInput {
  orderItemId: string;
  userId: string;
  rating: number;
  comment?: string;
}

export interface OrderItemReview {
  id: string;
  rating: number;
  comment: string | null;
}

export interface SellerOrderGroup {
  orderId: string;
  createdAt: Date;
  buyerName: string;
  shippingAddress: ShippingAddressSnapshot;
  items: FulfillmentItem[];
}

export interface CustomerOrder {
  id: string;
  status: OrderStatus;
  shippingCarrier: string;
  shippingService: string;
  shippingPrice: number;
  totalAmount: number;
  createdAt: Date;
  items: FulfillmentItem[];
}

type OrderStatus = 'PENDING' | 'PAID' | 'FAILED' | 'CANCELLED';

export type PaymentWebhookEvent =
  | {
      type: 'checkout.session.completed';
      sessionId: string;
      paymentStatus: string;
      metadata: CheckoutSessionMetadata;
    }
  | { type: 'payment_intent.payment_failed'; sessionId: string }
  | { type: 'unhandled' };
