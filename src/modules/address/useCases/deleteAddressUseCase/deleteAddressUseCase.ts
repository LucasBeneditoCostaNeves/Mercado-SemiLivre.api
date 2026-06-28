import { Injectable } from '@nestjs/common'
import { AddressRepository } from '../../repositories/AddressRepository'
import { AddressNotFoundError } from 'src/domain/errors/address/AddressNotFoundError'
import { AddressForbiddenError } from 'src/domain/errors/address/AddressForbiddenError'

interface IDeleteAddressRequest {
    id: string
    userId: string
}

@Injectable()
export class DeleteAddressUseCase {
    constructor(private addressRepository: AddressRepository) {}

    async execute({ id, userId }: IDeleteAddressRequest): Promise<void> {
        const address = await this.addressRepository.findById(id)
        if (!address) throw new AddressNotFoundError()
        if (address.userId !== userId) throw new AddressForbiddenError()

        await this.addressRepository.delete(id)
    }
}
