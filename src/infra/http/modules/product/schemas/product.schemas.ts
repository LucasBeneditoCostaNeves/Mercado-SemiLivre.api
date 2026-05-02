import { z } from 'zod'

export const createProductBodySchema = z
    .object({
        name: z.string().trim().min(1).max(255),
        category_product_id: z.uuid(),
        seller_user_id: z.uuid(),
        status: z.boolean(),
    })
    .strict()

export const updateProductBodySchema = z
    .object({
        name: z.string().trim().min(1).max(255).optional(),
        status: z.boolean().optional(),
    })
    .strict()

export const updateProductParamsSchema = z
    .object({
        id: z.uuid(),
    })
    .strict()
