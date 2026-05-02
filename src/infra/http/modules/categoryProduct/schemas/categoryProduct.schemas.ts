import { z } from 'zod'

export const createCategoryProductBodySchema = z
    .object({
        name: z.string().trim().min(1).max(255),
        status: z.boolean(),
    })
    .strict()