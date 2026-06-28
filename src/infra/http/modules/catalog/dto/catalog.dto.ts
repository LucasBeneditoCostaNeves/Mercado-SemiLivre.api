import { createZodDto } from 'nestjs-zod';
import {
  getProductDetailParamsSchema,
  getProductReviewsParamsSchema,
  getProductReviewsQuerySchema,
  listCatalogProductsQuerySchema,
} from '../schemas/catalog.schemas';

export class ListCatalogProductsQueryDto extends createZodDto(
  listCatalogProductsQuerySchema,
) {}

export class GetProductDetailParamsDto extends createZodDto(
  getProductDetailParamsSchema,
) {}

export class GetProductReviewsParamsDto extends createZodDto(
  getProductReviewsParamsSchema,
) {}

export class GetProductReviewsQueryDto extends createZodDto(
  getProductReviewsQuerySchema,
) {}
