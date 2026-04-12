import { Module } from "@nestjs/common"
import { UserRepository } from "src/modules/user/reposiories/UserRepository"
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserReposiory"
import { PrismaService } from "./prisma/prisma.service"
import { ProfileRepository } from "src/modules/profile/repositories/ProfileRepository"
import { PrismaProfileRepository } from "./prisma/repositories/PrismaProfilerReposiory"

@Module({
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        },
        {
            provide: ProfileRepository,
            useClass: PrismaProfileRepository
        }
    ],

    exports: [UserRepository, ProfileRepository]
})

export class DatabaseModule { }