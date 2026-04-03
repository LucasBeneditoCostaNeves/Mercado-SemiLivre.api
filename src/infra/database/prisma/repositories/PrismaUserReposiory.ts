import { User } from "src/modules/user/entities/User";
import { UserRepository } from "src/modules/user/reposiories/UserRepository";
import { PrismaUserMapper } from "../mappers/PrismaUserMapper";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaUserRepository implements UserRepository {

    constructor(private prisma: PrismaService) { }

    async create(user: User): Promise<void> {

        const userRaw = PrismaUserMapper.toPrisma(user)

        await this.prisma.user.create({
            data: userRaw
        })
    }

    async findByEmail(email: String): Promise<User | null> {
        // const result = await this.prisma.user.findFirst({
        //     where: { email: email }
        // })

        return null
    }
}