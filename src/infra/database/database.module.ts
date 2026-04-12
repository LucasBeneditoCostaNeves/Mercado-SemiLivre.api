import { Module } from "@nestjs/common"
import { UserRepository } from "src/modules/user/reposiories/UserRepository"
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserReposiory"
import { PrismaService } from "./prisma/prisma.service"
import { ProfileRepository } from "src/modules/profile/repositories/ProfileRepository"
import { PrismaProfileRepository } from "./prisma/repositories/PrismaProfilerReposiory"
import { CategoryProductRepository } from "src/modules/categoryProducts/repositories/categoryProduct"
import { PrismaCategoryProductRepository } from "./prisma/repositories/PrismaCategoryProductRespository"

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
        },
        {
            provide: CategoryProductRepository,
            useClass: PrismaCategoryProductRepository
        }
    ],

    exports: [UserRepository, ProfileRepository, CategoryProductRepository]
})

export class DatabaseModule { }