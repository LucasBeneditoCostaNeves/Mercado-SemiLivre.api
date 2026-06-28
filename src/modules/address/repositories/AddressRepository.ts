import { Address } from '../entities/Address'

export interface IAddressUpdateDTO {
    id: string
    cep?: string
    state?: string
    city?: string
    street?: string
    number?: string
    complement?: string | null
}

export abstract class AddressRepository {
    abstract create(address: Address): Promise<void>
    abstract findById(id: string): Promise<Address | null>
    abstract findManyByUserId(userId: string): Promise<Address[]>
    abstract update(data: IAddressUpdateDTO): Promise<void>
    abstract delete(id: string): Promise<void>
    abstract clearDefaultByUserId(userId: string): Promise<void>
    abstract setDefault(id: string): Promise<void>
}
