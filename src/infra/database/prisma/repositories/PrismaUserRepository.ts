import { User } from "src/modules/user/entities/User"
import { IUserUpdateDTO, UserRepository } from "src/modules/user/repositories/UserRepository"
import { PrismaUserMapper } from "../mappers/PrismaUserMapper"
import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/infra/database/prisma/prisma.service"

interface UserListDTO {
    id: string
    name: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt: Date
    updatedAt: Date
}

interface UserUpdateInput {
    name?: string
    email?: string
    status?: boolean
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

    async listManyUser(): Promise<UserListDTO[]> {
        const users = await this.prisma.user.findMany()
        return users
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.prisma.user.findFirst({
            where: {
                email,
                status: true,
            },
            include: {
                profile: {
                    select: { name: true },
                },
            },
        })

        if (!user) {
            return null
        }

        return PrismaUserMapper.toDomain(user)
    }

    async updateUser(dataUser: IUserUpdateDTO): Promise<void> {
        const { id, name, email, status } = dataUser
        const dataToUpdate: UserUpdateInput = { name, email, status }

        if (Object.keys(dataToUpdate).length > 0) {
            await this.prisma.user.update({
                where: { id },
                data: dataToUpdate,
            })
        }
    }
}