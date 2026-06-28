import { z } from 'zod';

export const listCatalogProductsQuerySchema = z.object({
  category: z.string().optional(),
  q: z.string().optional(),
  limit: z.coerce.number().int().positive().default(4),
  skip: z.coerce.number().int().min(0).default(0),
  offset: z.coerce.number().int().min(0).optional(),
  sort: z.enum(['price', 'rating', 'sales']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
  freeShipping: z.string().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
  minRating: z.coerce.number().min(1).max(5).optional(),
  brand: z.string().optional(),
});

export const getProductDetailParamsSchema = z.object({
  id: z.string().uuid(),
});

export const getProductReviewsParamsSchema = z.object({
  id: z.string().uuid(),
});

export const getProductReviewsQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(50).default(10),
  rating: z.coerce.number().int().min(1).max(5).optional(),
  sort: z.enum(['recent', 'top']).default('recent'),
});
