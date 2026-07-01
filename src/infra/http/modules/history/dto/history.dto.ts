import { createZodDto } from 'nestjs-zod'
import { recordSearchSchema, recordProductClickSchema } from '../schemas/history.schemas'

export class RecordSearchDto extends createZodDto(recordSearchSchema) {}
export class RecordProductClickDto extends createZodDto(recordProductClickSchema) {}
