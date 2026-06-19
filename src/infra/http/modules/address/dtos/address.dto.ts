import { createZodDto } from 'nestjs-zod'
import {
    addressIdParamSchema,
    addressParamsSchema,
    addressUserParamsSchema,
    createAddressBodySchema,
    updateAddressBodySchema,
} from '../schemas/address.schemas'

export class CreateAddressBodyDto extends createZodDto(createAddressBodySchema) {}
export class UpdateAddressBodyDto extends createZodDto(updateAddressBodySchema) {}
export class AddressUserParamsDto extends createZodDto(addressUserParamsSchema) {}
export class AddressParamsDto extends createZodDto(addressParamsSchema) {}
export class AddressIdParamDto extends createZodDto(addressIdParamSchema) {}
