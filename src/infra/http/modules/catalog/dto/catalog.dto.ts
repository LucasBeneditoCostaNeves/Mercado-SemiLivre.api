import { createZodDto } from 'nestjs-zod'
import { getProductDetailParamsSchema, listCatalogProductsQuerySchema } from '../schemas/catalog.schemas'

export class ListCatalogProductsQueryDto extends createZodDto(listCatalogProductsQuerySchema) {}

export class GetProductDetailParamsDto extends createZodDto(getProductDetailParamsSchema) {}
