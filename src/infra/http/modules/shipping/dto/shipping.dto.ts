import { createZodDto } from 'nestjs-zod'
import { quoteShippingSchema } from '../schemas/shipping.schemas'

export class QuoteShippingDto extends createZodDto(quoteShippingSchema) {}
