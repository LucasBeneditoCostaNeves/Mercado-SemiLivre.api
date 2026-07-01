import { z } from 'zod'

export const recordSearchSchema = z.object({
  term: z.string().min(2).max(255),
})

export const recordProductClickSchema = z.object({
  productId: z.string().min(1),
  sourcePage: z.enum(['home', 'search', 'category', 'product']),
})
