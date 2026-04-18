import { IProductUpdateDTO, ProductRepository } from "src/modules/product/repositories/ProductRepository"
import { PrismaProductMapper } from "../mappers/PrismaProduct"
import { Product } from "src/modules/product/entities/Product"
import { PrismaService } from "../prisma.service"
import { Injectable } from "@nestjs/common"

interface IProductDTO {
    id: string
    name: string
    status: boolean
    category_product_id: string
    seller_user_id: string
    createdAt: Date
    updatedAt: Date
}

@Injectable()
export class PrismaProductRepository implements ProductRepository {
    constructor(private prisma: PrismaService) { }

    async create(product: Product): Promise<void> {
        const productRaw = PrismaProductMapper.toPrisma(product)

        await this.prisma.product.create({
            data: productRaw
        })
    }

    async findMany(): Promise<IProductDTO[]> {
        const products = await this.prisma.product.findMany({})
        return products
    }

    async update(dataProduct: IProductUpdateDTO): Promise<void> {
        const { id, name, status } = dataProduct

        await this.prisma.product.update({
            where: { id },
            data: { name, status }
        })
    }

    async findById(id: string): Promise<Product | null> {
        const product = await this.prisma.product.findUnique({
            where: { id }
        })

        if (!product) {
            return null
        }

        return PrismaProductMapper.toDomain(product)
    }
}