import { createZodDto } from 'nestjs-zod'
import { createUserBodySchema, updateUserBodySchema, updateUserParamsSchema } from '../schemas/user.schemas';

export class CreateUserBodyDto extends createZodDto(createUserBodySchema) { }

export class UpdateUserBodyDto extends createZodDto(updateUserBodySchema) { }

export class UpdateUserParamsDto extends createZodDto(updateUserParamsSchema) { }