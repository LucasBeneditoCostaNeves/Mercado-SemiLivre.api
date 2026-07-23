export interface CheckoutLineItem {
  productVariationId: string;
  title: string;
  imageUrl: string;
  quantity: number;
  unitPrice: number;
}

export interface CreateCheckoutSessionInput {
  userId: string;
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

export type PaymentWebhookEvent =
  | {
      type: 'checkout.session.completed';
      sessionId: string;
      paymentStatus: string;
      metadata: CheckoutSessionMetadata;
    }
  | { type: 'payment_intent.payment_failed'; sessionId: string }
  | { type: 'unhandled' };
