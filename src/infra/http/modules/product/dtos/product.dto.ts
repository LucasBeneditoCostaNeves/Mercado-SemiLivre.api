import { createZodDto } from 'nestjs-zod'
import {
    createProductBodySchema,
    updateProductBodySchema,
    updateProductParamsSchema,
} from '../schemas/product.schemas'

export class CreateProductBodyDto extends createZodDto(createProductBodySchema) { }

export class UpdateProductBodyDto extends createZodDto(updateProductBodySchema) { }

export class UpdateProductParamsDto extends createZodDto(updateProductParamsSchema) { }
