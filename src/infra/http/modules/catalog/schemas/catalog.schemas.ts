import { z } from 'zod'

export const listCatalogProductsQuerySchema = z.object({
  category: z.enum(['bestsellers', 'recommended']).optional(),
  limit: z.coerce.number().int().positive().default(4),
  skip: z.coerce.number().int().min(0).default(0),
})

export const getProductDetailParamsSchema = z.object({
  id: z.string().uuid(),
})
