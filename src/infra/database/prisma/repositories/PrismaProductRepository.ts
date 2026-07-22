import { IProductFilter, IProductUpdateDTO, ProductRepository } from "src/modules/product/repositories/ProductRepository"
import { PrismaProductMapper } from "../mappers/PrismaProduct"
import { Product } from "src/modules/product/entities/Product"
import { PrismaService } from "../prisma.service"
import { Injectable } from "@nestjs/common"

interface IProductDTO {
    id: string
    title: string
    status: boolean
    category_product_id: string
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
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

    async findMany(filter?: IProductFilter): Promise<IProductDTO[]> {
        const products = await this.prisma.product.findMany({
            where: filter?.sellerUserId ? { seller_user_id: filter.sellerUserId } : undefined,
        })
        return products.map(({ id, title, status, category_product_id, seller_user_id, brand_id, thumbnail, warrantyInformation, createdAt, updatedAt }) => ({
            id, title, status, category_product_id, seller_user_id, brand_id, thumbnail, warrantyInformation, createdAt, updatedAt
        }))
    }

    async update(dataProduct: IProductUpdateDTO): Promise<void> {
        const { id, title, status, thumbnail } = dataProduct

        await this.prisma.product.update({
            where: { id },
            data: { title, status, thumbnail }
        })
    }

    async delete(id: string): Promise<void> {
        await this.prisma.product.delete({
            where: { id }
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
