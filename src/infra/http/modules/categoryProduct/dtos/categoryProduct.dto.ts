import { createZodDto } from 'nestjs-zod'
import { createCategoryProductBodySchema } from '../schemas/categoryProduct.schemas';

export class CreateCategoryProductBodyDto extends createZodDto(createCategoryProductBodySchema) { }
