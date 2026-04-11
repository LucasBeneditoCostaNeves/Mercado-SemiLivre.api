import { User } from "src/modules/user/entities/User"
import { UserRepository } from "src/modules/user/reposiories/UserRepository"
import { PrismaUserMapper } from "../mappers/PrismaUserMapper"
import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/infra/database/prisma/prisma.service"
import { ProfileRepository } from "src/modules/profile/repositories/ProfileRepository"
import { PrismaProfileMapper } from "../mappers/PrismaProfileMapper"
import { Profile } from "src/modules/profile/entities/Profile"

interface UserDTO {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

@Injectable()
export class PrismaProfileRepository implements ProfileRepository {

    constructor(private prisma: PrismaService) { }

    async create(profile: Profile): Promise<void> {

        const userRaw = PrismaProfileMapper.toPrisma(profile)

        await this.prisma.profile.create({
            data: userRaw
        })
    }
}