import { z } from 'zod'

export const addCartItemSchema = z.object({
  productVariationId: z.string().uuid(),
  quantity: z.number().int().min(1),
})

export const updateCartItemSchema = z.object({
  quantity: z.number().int().min(1),
})

export const cartItemParamsSchema = z.object({
  id: z.string().uuid(),
})
