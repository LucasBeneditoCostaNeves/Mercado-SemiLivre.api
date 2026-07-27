import { createZodDto } from 'nestjs-zod';
import {
  createCheckoutSessionSchema,
  createOrderItemReviewSchema,
  sellerSalesSummaryQuerySchema,
} from '../schemas/order.schemas';

export class CreateCheckoutSessionDto extends createZodDto(
  createCheckoutSessionSchema,
) {}

export class SellerSalesSummaryQueryDto extends createZodDto(
  sellerSalesSummaryQuerySchema,
) {}

export class CreateOrderItemReviewDto extends createZodDto(
  createOrderItemReviewSchema,
) {}
