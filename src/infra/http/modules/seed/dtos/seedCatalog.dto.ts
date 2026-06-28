import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const reviewSchema = z.object({
  rating: z.number(),
  comment: z.string(),
  date: z.string(),
  reviewerName: z.string().optional(),
  reviewerEmail: z.string().optional(),
})

const productSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  category: z.string().min(1),
  price: z.number(),
  discountPercentage: z.number(),
  stock: z.number().int(),
  brand: z.string().optional().nullable(),
  warrantyInformation: z.string(),
  thumbnail: z.string().url(),
  images: z.array(z.string().url()),
  reviews: z.array(reviewSchema),
})

const seedCatalogBodySchema = z.object({
  products: z.array(productSchema).min(1),
})

export class SeedCatalogBodyDto extends createZodDto(seedCatalogBodySchema) {}
