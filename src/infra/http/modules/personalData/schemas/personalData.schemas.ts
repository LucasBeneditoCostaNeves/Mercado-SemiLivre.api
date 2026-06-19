import { z } from 'zod'

const CPF_REGEX = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
const PHONE_REGEX = /^\(\d{2}\) \d{5}-\d{4}$/

export const createPersonalDataBodySchema = z
    .object({
        cpf: z.string().regex(CPF_REGEX, 'CPF deve estar no formato 000.000.000-00'),
        birthDate: z.coerce.date(),
        phone: z.string().regex(PHONE_REGEX, 'Telefone deve estar no formato (00) 00000-0000'),
        gender: z.enum(['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY']),
    })
    .strict()

export const updatePersonalDataBodySchema = z
    .object({
        birthDate: z.coerce.date().optional(),
        phone: z.string().regex(PHONE_REGEX, 'Telefone deve estar no formato (00) 00000-0000').optional(),
        gender: z.enum(['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY']).optional(),
    })
    .strict()

export const personalDataParamsSchema = z
    .object({
        userId: z.string().uuid(),
    })
    .strict()
