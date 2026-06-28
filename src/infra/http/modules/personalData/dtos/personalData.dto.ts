import { createZodDto } from 'nestjs-zod'
import {
    createPersonalDataBodySchema,
    updatePersonalDataBodySchema,
    personalDataParamsSchema,
} from '../schemas/personalData.schemas'

export class CreatePersonalDataBodyDto extends createZodDto(createPersonalDataBodySchema) {}
export class UpdatePersonalDataBodyDto extends createZodDto(updatePersonalDataBodySchema) {}
export class PersonalDataParamsDto extends createZodDto(personalDataParamsSchema) {}
