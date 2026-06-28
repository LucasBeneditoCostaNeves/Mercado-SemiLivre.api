import { Injectable } from '@nestjs/common'
import { Address } from '../../entities/Address'
import { AddressRepository } from '../../repositories/AddressRepository'

interface IListAddressesRequest {
    userId: string
}

@Injectable()
export class ListAddressesUseCase {
    constructor(private addressRepository: AddressRepository) {}

    async execute({ userId }: IListAddressesRequest): Promise<Address[]> {
        return this.addressRepository.findManyByUserId(userId)
    }
}
