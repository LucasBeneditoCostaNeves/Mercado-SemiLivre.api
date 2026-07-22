import { z } from 'zod'

export const createProductVariationBodyShema = z
    .object({
        title: z.string().trim().min(5).max(255),
        description: z.string().trim().min(10).max(1000),
        price: z.number().nonnegative(),
        status: z.boolean(),
        product_id: z.uuid(),
        quantity: z.number(),
        discountPercentage: z.number().min(0).max(100).default(0),

    }).strict()
