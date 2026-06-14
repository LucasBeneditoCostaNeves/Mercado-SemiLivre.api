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
import { ProductVariationRepository } from "src/modules/productVariation/repositories/ProductVariationRepository"
import { PrismaProductVariationRepository } from "./prisma/repositories/PrismaProductVariationRepository"

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
        },
        {
            provide: ProductVariationRepository,
            useClass: PrismaProductVariationRepository
        }
    ],

    exports: [UserRepository, ProfileRepository, CategoryProductRepository, ProductRepository, ProductVariationRepository]
})

export class DatabaseModule { }