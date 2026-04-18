import { Module } from "@nestjs/common"
import { UserRepository } from "src/modules/user/repositories/UserRepository"
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserRepository"
import { PrismaService } from "./prisma/prisma.service"
import { ProfileRepository } from "src/modules/profile/repositories/ProfileRepository"
import { PrismaProfileRepository } from "./prisma/repositories/PrismaProfilerReposiory"
import { CategoryProductRepository } from "src/modules/categoryProducts/repositories/categoryProduct"
import { PrismaCategoryProductRepository } from "./prisma/repositories/PrismaCategoryProductRepository"
import { ProductRepository } from "src/modules/product/repositories/ProductRepository"
import { PrismaProductRepository } from "./prisma/repositories/PrismaProductRepository"

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
        },
        {
            provide: ProductRepository,
            useClass: PrismaProductRepository
        }
    ],

    exports: [UserRepository, ProfileRepository, CategoryProductRepository, ProductRepository]
})

export class DatabaseModule { }