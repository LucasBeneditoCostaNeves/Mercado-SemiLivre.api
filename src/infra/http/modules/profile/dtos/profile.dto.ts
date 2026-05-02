import { createZodDto } from 'nestjs-zod'
import { createProfileBodySchema } from '../schemas/profile.schemas';

export class CreateProfileBodyDto extends createZodDto(createProfileBodySchema) { }