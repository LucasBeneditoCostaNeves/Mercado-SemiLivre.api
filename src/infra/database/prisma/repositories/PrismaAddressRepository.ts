import { Injectable } from '@nestjs/common'
import { Address } from 'src/modules/address/entities/Address'
import { AddressRepository, IAddressUpdateDTO } from 'src/modules/address/repositories/AddressRepository'
import { PrismaAddressMapper } from '../mappers/PrismaAddressMapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
    constructor(private prisma: PrismaService) {}

    async create(address: Address): Promise<void> {
        const raw = PrismaAddressMapper.toPrisma(address)
        await this.prisma.address.create({ data: raw })
    }

    async findById(id: string): Promise<Address | null> {
        const raw = await this.prisma.address.findUnique({ where: { id } })
        if (!raw) return null
        return PrismaAddressMapper.toDomain(raw)
    }

    async findManyByUserId(userId: string): Promise<Address[]> {
        const rows = await this.prisma.address.findMany({ where: { userId } })
        return rows.map(PrismaAddressMapper.toDomain)
    }

    async update({ id, ...fields }: IAddressUpdateDTO): Promise<void> {
        await this.prisma.address.update({ where: { id }, data: fields })
    }

    async delete(id: string): Promise<void> {
        await this.prisma.address.delete({ where: { id } })
    }

    async clearDefaultByUserId(userId: string): Promise<void> {
        await this.prisma.address.updateMany({
            where: { userId, isDefault: true },
            data: { isDefault: false },
        })
    }

    async setDefault(id: string): Promise<void> {
        await this.prisma.address.update({ where: { id }, data: { isDefault: true } })
    }
}
