import { Address } from '../entities/Address'
import { AddressRepository, IAddressUpdateDTO } from './AddressRepository'

export class AddressRepositoryInMemory implements AddressRepository {
    public items: Address[] = []

    async create(address: Address): Promise<void> {
        this.items.push(address)
    }

    async findById(id: string): Promise<Address | null> {
        return this.items.find(a => a.id === id) ?? null
    }

    async findManyByUserId(userId: string): Promise<Address[]> {
        return this.items.filter(a => a.userId === userId)
    }

    async update({ id, ...fields }: IAddressUpdateDTO): Promise<void> {
        const address = this.items.find(a => a.id === id)
        if (!address) return
        if (fields.cep !== undefined) address.cep = fields.cep
        if (fields.state !== undefined) address.state = fields.state
        if (fields.city !== undefined) address.city = fields.city
        if (fields.street !== undefined) address.street = fields.street
        if (fields.number !== undefined) address.number = fields.number
        if ('complement' in fields) address.complement = fields.complement
    }

    async delete(id: string): Promise<void> {
        this.items = this.items.filter(a => a.id !== id)
    }

    async clearDefaultByUserId(userId: string): Promise<void> {
        this.items.filter(a => a.userId === userId).forEach(a => (a.isDefault = false))
    }

    async setDefault(id: string): Promise<void> {
        const address = this.items.find(a => a.id === id)
        if (address) address.isDefault = true
    }
}
