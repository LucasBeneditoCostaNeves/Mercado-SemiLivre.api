import { z } from 'zod'

export const askProductQuestionBodySchema = z
    .object({
        question: z.string().trim().min(5).max(1000),
    })
    .strict()

export const productIdParamsSchema = z
    .object({
        id: z.uuid(),
    })
    .strict()

export const answerProductQuestionBodySchema = z
    .object({
        answer: z.string().trim().min(1).max(1000),
    })
    .strict()

export const questionIdParamsSchema = z
    .object({
        id: z.uuid(),
    })
    .strict()

export const listSellerQuestionsQuerySchema = z
    .object({
        status: z.enum(['pending', 'answered']).optional(),
    })
    .strict()
