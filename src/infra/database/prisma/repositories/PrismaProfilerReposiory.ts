import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/infra/database/prisma/prisma.service"
import { ProfileRepository } from "src/modules/profile/repositories/ProfileRepository"
import { PrismaProfileMapper } from "../mappers/PrismaProfileMapper"
import { Profile } from "src/modules/profile/entities/Profile"

interface ProfileDTO {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

@Injectable()
export class PrismaProfileRepository implements ProfileRepository {

    constructor(private prisma: PrismaService) { }

    async create(profile: Profile): Promise<void> {

        const profileRaw = PrismaProfileMapper.toPrisma(profile)

        await this.prisma.profile.create({
            data: profileRaw
        })
    }

    async listMany(): Promise<ProfileDTO[]> {
        const profiles = await this.prisma.profile.findMany()
        return profiles
    }
}