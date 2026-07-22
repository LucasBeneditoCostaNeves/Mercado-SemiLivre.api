import { z } from 'zod'

export const createProductBodySchema = z
    .object({
        title: z.string().trim().min(1).max(255),
        category_product_id: z.uuid(),
        brand_id: z.uuid(),
        thumbnail: z.string().trim().min(1),
        warrantyInformation: z.string().trim().min(1).max(500),
        status: z.boolean(),
    })
    .strict()

export const updateProductBodySchema = z
    .object({
        title: z.string().trim().min(1).max(255).optional(),
        status: z.boolean().optional(),
    })
    .strict()

export const updateProductParamsSchema = z
    .object({
        id: z.uuid(),
    })
    .strict()
