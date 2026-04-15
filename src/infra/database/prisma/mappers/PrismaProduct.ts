import { Product } from "src/modules/product/entities/Product"
import { Product as ProductRaw } from "@prisma/client"

export class PrismaProductMapper {

    static toPrisma({ id, name, category_product_id, seller_user_id, status, createdAt, updatedAt }: Product): ProductRaw {
        return {
            id,
            name,
            category_product_id,
            seller_user_id,
            status,
            createdAt,
            updatedAt,
        }
    }

    static toDomain({ id, ...productData }: ProductRaw): Product {
        return new Product(
            {
                ...productData,
            },
            id
        )
    }
}