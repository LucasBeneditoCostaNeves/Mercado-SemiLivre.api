import { Injectable } from '@nestjs/common'
import { Address } from '../../entities/Address'
import { AddressRepository } from '../../repositories/AddressRepository'
import { AddressNotFoundError } from 'src/domain/errors/address/AddressNotFoundError'
import { AddressForbiddenError } from 'src/domain/errors/address/AddressForbiddenError'

interface IGetAddressRequest {
    id: string
    userId: string
}

@Injectable()
export class GetAddressUseCase {
    constructor(private addressRepository: AddressRepository) {}

    async execute({ id, userId }: IGetAddressRequest): Promise<Address> {
        const address = await this.addressRepository.findById(id)
        if (!address) throw new AddressNotFoundError()
        if (address.userId !== userId) throw new AddressForbiddenError()
        return address
    }
}
