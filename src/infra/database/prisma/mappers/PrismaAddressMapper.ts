import { Address as AddressRaw } from '@prisma/client'
import { Address } from 'src/modules/address/entities/Address'

export class PrismaAddressMapper {
    static toPrisma({ id, cep, state, city, street, number, complement, isDefault, userId, createdAt, updatedAt }: Address): AddressRaw {
        return { id, cep, state, city, street, number, complement: complement ?? null, isDefault, userId, createdAt, updatedAt }
    }

    static toDomain({ id, ...raw }: AddressRaw): Address {
        return new Address(
            {
                cep: raw.cep,
                state: raw.state,
                city: raw.city,
                street: raw.street,
                number: raw.number,
                complement: raw.complement,
                isDefault: raw.isDefault,
                userId: raw.userId,
                createdAt: raw.createdAt,
                updatedAt: raw.updatedAt,
            },
            id,
        )
    }
}
