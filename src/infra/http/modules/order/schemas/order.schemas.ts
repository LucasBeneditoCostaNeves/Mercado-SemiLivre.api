import { z } from 'zod';

export const createCheckoutSessionSchema = z.object({
  addressId: z.string().uuid(),
  cartItemIds: z
    .array(z.string().uuid())
    .min(1, 'Selecione ao menos um item para pagamento'),
  shippingCarrier: z.string().min(1),
  shippingService: z.string().min(1),
  shippingPrice: z.number().min(0),
  couponCode: z.string().trim().min(1).optional(),
});

export const SELLER_SALES_PERIODS = ['7d', '30d', '90d'] as const;

export const sellerSalesSummaryQuerySchema = z.object({
  period: z.enum(SELLER_SALES_PERIODS).default('30d'),
});

export const createOrderItemReviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  comment: z.string().trim().min(1).optional(),
});
