import { createZodDto } from 'nestjs-zod'
import { listCatalogProductsQuerySchema } from '../schemas/catalog.schemas'

export class ListCatalogProductsQueryDto extends createZodDto(listCatalogProductsQuerySchema) {}
