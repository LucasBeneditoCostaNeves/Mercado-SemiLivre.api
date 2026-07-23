import { createZodDto } from 'nestjs-zod';
import {
  createCheckoutSessionSchema,
  sellerSalesSummaryQuerySchema,
} from '../schemas/order.schemas';

export class CreateCheckoutSessionDto extends createZodDto(
  createCheckoutSessionSchema,
) {}

export class SellerSalesSummaryQueryDto extends createZodDto(
  sellerSalesSummaryQuerySchema,
) {}
