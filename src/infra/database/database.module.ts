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
import { PersonalDataRepository } from "src/modules/personalData/repositories/PersonalDataRepository"
import { PrismaPersonalDataRepository } from "./prisma/repositories/PrismaPersonalDataRepository"
import { AddressRepository } from "src/modules/address/repositories/AddressRepository"
import { PrismaAddressRepository } from "./prisma/repositories/PrismaAddressRepository"

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
        },
        {
            provide: PersonalDataRepository,
            useClass: PrismaPersonalDataRepository
        },
        {
            provide: AddressRepository,
            useClass: PrismaAddressRepository
        }
    ],

    exports: [PrismaService, UserRepository, ProfileRepository, CategoryProductRepository, ProductRepository, ProductVariationRepository, PersonalDataRepository, AddressRepository]
})

export class DatabaseModule { }