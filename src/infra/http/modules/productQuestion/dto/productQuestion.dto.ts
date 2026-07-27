import { createZodDto } from 'nestjs-zod'
import {
    askProductQuestionBodySchema,
    productIdParamsSchema,
    answerProductQuestionBodySchema,
    questionIdParamsSchema,
    listSellerQuestionsQuerySchema,
} from '../schemas/productQuestion.schemas'

export class AskProductQuestionBodyDto extends createZodDto(askProductQuestionBodySchema) {}
export class ProductIdParamsDto extends createZodDto(productIdParamsSchema) {}
export class AnswerProductQuestionBodyDto extends createZodDto(answerProductQuestionBodySchema) {}
export class QuestionIdParamsDto extends createZodDto(questionIdParamsSchema) {}
export class ListSellerQuestionsQueryDto extends createZodDto(listSellerQuestionsQuerySchema) {}
