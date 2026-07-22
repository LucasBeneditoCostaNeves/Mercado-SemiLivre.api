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
