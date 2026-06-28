import { Address } from 'src/modules/address/entities/Address'

export class AddressViewModel {
    static toHTTP(address: Address) {
        return {
            id: address.id,
            cep: address.cep,
            state: address.state,
            city: address.city,
            street: address.street,
            number: address.number,
            complement: address.complement ?? null,
            isDefault: address.isDefault,
            userId: address.userId,
            createdAt: address.createdAt,
            updatedAt: address.updatedAt,
        }
    }
}
