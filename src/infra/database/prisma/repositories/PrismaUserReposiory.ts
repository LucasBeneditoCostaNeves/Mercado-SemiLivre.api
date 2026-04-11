import { User } from "src/modules/user/entities/User"
import { UserRepository } from "src/modules/user/reposiories/UserRepository"
import { PrismaUserMapper } from "../mappers/PrismaUserMapper"
import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/infra/database/prisma/prisma.service"

interface UserDTO {
    id: string
    name: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt: Date
    updatedAt: Date
}

@Injectable()
export class PrismaUserRepository implements UserRepository {

    constructor(private prisma: PrismaService) { }

    async create(user: User): Promise<void> {

        const userRaw = PrismaUserMapper.toPrisma(user)

        await this.prisma.user.create({
            data: userRaw
        })
    }

    async listManyUser(): Promise<UserDTO[]> {
        const users = await this.prisma.user.findMany()
        return users
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: {
                email
            }
        })

        if (!user) {
            return null
        }

        return PrismaUserMapper.toDomain(user)
    }
}