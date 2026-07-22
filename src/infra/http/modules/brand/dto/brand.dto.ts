import { createZodDto } from 'nestjs-zod'
import { createBrandBodySchema } from '../schemas/brand.schemas'

export class CreateBrandBodyDto extends createZodDto(createBrandBodySchema) {}
