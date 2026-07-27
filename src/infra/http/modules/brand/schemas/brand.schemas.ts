import { z } from 'zod'

export const createBrandBodySchema = z
    .object({
        name: z.string().trim().min(1).max(255),
    })
    .strict()
