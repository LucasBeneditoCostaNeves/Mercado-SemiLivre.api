import { ProductRepository } from "src/modules/product/repositories/ProductRepository"
import { PrismaProductMapper } from "../mappers/PrismaProduct"
import { Product } from "src/modules/product/entities/Product"
import { PrismaClient } from "@prisma/client/extension"
import { PrismaService } from "../prisma.service"

interface IProductDTO {
    id: string
    name: string
    status: boolean
    category_product_id: string
    seller_user_id: string
    created_at: string
    updated_at: string
}

export class PrismaProductRepository implements ProductRepository {
    constructor(private prisma: PrismaService) { }

    async create(product: Product): Promise<void> {
        const productRaw = PrismaProductMapper.toPrisma(product)

        this.prisma.product.create({
            data: productRaw
        })
    }
}