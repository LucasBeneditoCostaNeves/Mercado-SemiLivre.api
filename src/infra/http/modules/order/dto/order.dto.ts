import { createZodDto } from 'nestjs-zod';
import { createCheckoutSessionSchema } from '../schemas/order.schemas';

export class CreateCheckoutSessionDto extends createZodDto(
  createCheckoutSessionSchema,
) {}
