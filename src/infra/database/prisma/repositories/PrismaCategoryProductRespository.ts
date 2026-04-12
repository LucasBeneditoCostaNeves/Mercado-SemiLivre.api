import { CategoryProduct } from "src/modules/categoryProducts/entities/categoryProducts"
import { CategoryProductRepository } from "src/modules/categoryProducts/repositories/categoryProduct"
import { PrismaService } from "../prisma.service"
import { PrismaCategoryProductMapper } from "../mappers/PrismaCategoryProduct"
import { Injectable } from "@nestjs/common"

export interface ICategoryProductDTO {
    id: string
    name: string
    status: boolean
    createdAt: Date
    updatedAt: Date
}


@Injectable()
export class PrismaCategoryProductRepository implements CategoryProductRepository {
    constructor(private prisma: PrismaService) { }

    async create(categoryProduct: CategoryProduct): Promise<void> {
        const categoryProductRaw = PrismaCategoryProductMapper.toPrisma(categoryProduct)

        await this.prisma.categoryProducts.create({
            data: categoryProductRaw
        })
    }

    async listMany(): Promise<ICategoryProductDTO[]> {
        const categoriesProduct = await this.prisma.categoryProducts.findMany()

        return categoriesProduct
    }
}