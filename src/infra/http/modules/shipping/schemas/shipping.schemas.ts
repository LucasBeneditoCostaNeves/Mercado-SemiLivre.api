import { z } from 'zod'

export const quoteShippingSchema = z.object({
  destinationCep: z.string().regex(/^\d{8}$/, 'CEP deve conter 8 dígitos numéricos'),
  items: z
    .array(
      z.object({
        productVariationId: z.string().uuid(),
        quantity: z.number().int().min(1),
      }),
    )
    .min(1, 'O carrinho precisa conter ao menos um item'),
})
