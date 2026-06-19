import { createZodDto } from 'nestjs-zod'
import {
    createAddressBodySchema,
    updateAddressBodySchema,
    addressUserParamsSchema,
    addressParamsSchema,
} from '../schemas/address.schemas'

export class CreateAddressBodyDto extends createZodDto(createAddressBodySchema) {}
export class UpdateAddressBodyDto extends createZodDto(updateAddressBodySchema) {}
export class AddressUserParamsDto extends createZodDto(addressUserParamsSchema) {}
export class AddressParamsDto extends createZodDto(addressParamsSchema) {}
