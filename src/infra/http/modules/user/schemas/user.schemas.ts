import { z } from 'zod'

export const createUserBodySchema = z
    .object({
        name: z.string().min(5).max(255),
        email: z.email().min(5).max(255),
        password: z.string().min(5).max(255),
        status: z.boolean(),
        profileId: z.uuid()
    })
    .strict()

export const updateUserBodySchema = z
    .object({
        name: z.string().trim().min(1).max(255).optional(),
        email: z.email().min(5).max(255).optional(),
        status: z.boolean().optional(),
    })
    .strict()

export const updateUserParamsSchema = z
    .object({
        id: z.uuid()
    })
    .strict()
