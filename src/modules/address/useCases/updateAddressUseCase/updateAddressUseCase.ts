import { Injectable } from '@nestjs/common'
import { AddressRepository } from '../../repositories/AddressRepository'
import { AddressNotFoundError } from 'src/domain/errors/address/AddressNotFoundError'
import { AddressForbiddenError } from 'src/domain/errors/address/AddressForbiddenError'

interface IUpdateAddressRequest {
    id: string
    userId: string
    cep?: string
    state?: string
    city?: string
    street?: string
    number?: string
    complement?: string | null
}

@Injectable()
export class UpdateAddressUseCase {
    constructor(private addressRepository: AddressRepository) {}

    async execute({ id, userId, ...fields }: IUpdateAddressRequest): Promise<void> {
        const address = await this.addressRepository.findById(id)
        if (!address) throw new AddressNotFoundError()
        if (address.userId !== userId) throw new AddressForbiddenError()

        await this.addressRepository.update({ id, ...fields })
    }
}
