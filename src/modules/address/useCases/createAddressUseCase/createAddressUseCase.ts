import { Injectable } from '@nestjs/common'
import { Address } from '../../entities/Address'
import { AddressRepository } from '../../repositories/AddressRepository'

interface ICreateAddressRequest {
    userId: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement?: string | null
}

@Injectable()
export class CreateAddressUseCase {
    constructor(private addressRepository: AddressRepository) {}

    async execute(data: ICreateAddressRequest): Promise<Address> {
        const address = new Address({ ...data, isDefault: false })
        await this.addressRepository.create(address)
        return address
    }
}
