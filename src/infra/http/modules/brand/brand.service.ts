import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'

@Injectable()
export class BrandService {
    constructor(private prisma: PrismaService) {}

    async create(name: string) {
        const existing = await this.prisma.brand.findUnique({ where: { name } })

        if (existing) {
            throw new ConflictException('Marca já cadastrada')
        }

        return this.prisma.brand.create({ data: { name } })
    }

    async listMany() {
        return this.prisma.brand.findMany({ orderBy: { name: 'asc' } })
    }
}
