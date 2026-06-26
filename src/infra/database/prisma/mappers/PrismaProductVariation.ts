import { ProductVariation } from "src/modules/productVariation/entities/ProductVariation"
import { Prisma, ProductVariation as ProductVariationRaw } from "@prisma/client"

export class PrismaProductVariationMapper {

    static toPrisma({ id, title, price, quantity, description, product_id, status, createdAt, updatedAt }: ProductVariation) {
        return {
            id,
            title,
            price: new Prisma.Decimal(price),
            quantity,
            description,
            product_id,
            status: status ?? true,
            createdAt,
            updatedAt,
        } as unknown as ProductVariationRaw
    }

    static toDomain({ id, ...data }: ProductVariationRaw): ProductVariation {
        return new ProductVariation(
            {
                title: data.title,
                price: Number(data.price),
                quantity: data.quantity,
                description: data.description,
                product_id: data.product_id,
                status: data.status,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
            id
        )
    }
}
