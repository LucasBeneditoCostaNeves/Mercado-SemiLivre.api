import { z } from 'zod'

export const createAddressBodySchema = z
    .object({
        cep: z.string().min(1),
        state: z.string().min(2).max(2),
        city: z.string().min(1),
        street: z.string().min(1),
        number: z.string().min(1),
        complement: z.string().optional().nullable(),
    })
    .strict()

export const updateAddressBodySchema = z
    .object({
        cep: z.string().min(1).optional(),
        state: z.string().min(2).max(2).optional(),
        city: z.string().min(1).optional(),
        street: z.string().min(1).optional(),
        number: z.string().min(1).optional(),
        complement: z.string().optional().nullable(),
    })
    .strict()

export const addressUserParamsSchema = z
    .object({
        userId: z.string().uuid(),
    })
    .strict()

export const addressParamsSchema = z
    .object({
        userId: z.string().uuid(),
        id: z.string().uuid(),
    })
    .strict()

export const addressIdParamSchema = z
    .object({
        id: z.string().uuid(),
    })
    .strict()
