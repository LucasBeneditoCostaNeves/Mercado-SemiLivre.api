import { z } from 'zod'

export const addFavoriteSchema = z.object({
  productId: z.string().uuid(),
})

export const favoriteParamsSchema = z.object({
  id: z.string().uuid(),
})

export const listFavoritesQuerySchema = z.object({
  page: z.coerce.number().int().min(1).optional().default(1),
  limit: z.coerce.number().int().min(1).max(100).optional().default(20),
})
