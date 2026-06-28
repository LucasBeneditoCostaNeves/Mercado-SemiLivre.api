import { Product } from "src/modules/product/entities/Product"
import { Product as ProductRaw } from "@prisma/client"

export class PrismaProductMapper {

    static toPrisma({ id, title, category_product_id, seller_user_id, status, createdAt, updatedAt }: Product) {
        return {
            id,
            title,
            category_product_id,
            seller_user_id,
            status,
            createdAt,
            updatedAt,
        } as unknown as ProductRaw
    }

    static toDomain({ id, ...productData }: ProductRaw): Product {
        return new Product(
            {
                title: productData.title,
                category_product_id: productData.category_product_id,
                seller_user_id: productData.seller_user_id,
                status: productData.status,
                createdAt: productData.createdAt,
                updatedAt: productData.updatedAt,
            },
            id
        )
    }
}
