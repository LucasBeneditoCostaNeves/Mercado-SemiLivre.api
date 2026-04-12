import { CategoryProduct } from "src/modules/categoryProducts/entities/categoryProducts"
import { CategoryProductRepository } from "src/modules/categoryProducts/repositories/categoryProduct"
import { PrismaService } from "../prisma.service"
import { PrismaCategoryProductMapper } from "../mappers/PrismaCategoryProduct"
import { Injectable } from "@nestjs/common"


@Injectable()
export class PrismaCategoryProductRepository implements CategoryProductRepository {
    constructor(private prisma: PrismaService) { }

    async create(categoryProduct: CategoryProduct): Promise<void> {
        const categoryProductRaw = PrismaCategoryProductMapper.toPrisma(categoryProduct)

        console.log(categoryProductRaw)

        await this.prisma.categoryProducts.create({
            data: categoryProductRaw
        })
    }
}