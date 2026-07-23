import { createZodDto } from 'nestjs-zod';
import {
  createProductVariationBodyShema,
  updateProductVariationBodySchema,
  updateProductVariationParamsSchema,
} from '../schemas/productVariation.schema';

export class createProductVariationBodyDto extends createZodDto(
  createProductVariationBodyShema,
) {}

export class UpdateProductVariationBodyDto extends createZodDto(
  updateProductVariationBodySchema,
) {}

export class UpdateProductVariationParamsDto extends createZodDto(
  updateProductVariationParamsSchema,
) {}
