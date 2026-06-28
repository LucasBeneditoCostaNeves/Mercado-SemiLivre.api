import { Injectable } from '@nestjs/common'
import { PersonalData } from 'src/modules/personalData/entities/PersonalData'
import { IPersonalDataUpdateDTO, PersonalDataRepository } from 'src/modules/personalData/repositories/PersonalDataRepository'
import { PrismaPersonalDataMapper } from '../mappers/PrismaPersonalDataMapper'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaPersonalDataRepository implements PersonalDataRepository {
    constructor(private prisma: PrismaService) {}

    async create(personalData: PersonalData): Promise<void> {
        const raw = PrismaPersonalDataMapper.toPrisma(personalData)
        await this.prisma.personalData.create({ data: raw })
    }

    async findByUserId(userId: string): Promise<PersonalData | null> {
        const raw = await this.prisma.personalData.findUnique({ where: { userId } })
        if (!raw) return null
        return PrismaPersonalDataMapper.toDomain(raw)
    }

    async findByCpf(cpfEncrypted: string): Promise<PersonalData | null> {
        const raw = await this.prisma.personalData.findUnique({ where: { cpf: cpfEncrypted } })
        if (!raw) return null
        return PrismaPersonalDataMapper.toDomain(raw)
    }

    async update({ userId, birthDate, phone, gender }: IPersonalDataUpdateDTO): Promise<void> {
        await this.prisma.personalData.update({
            where: { userId },
            data: { birthDate, phone, gender: gender as any },
        })
    }
}
