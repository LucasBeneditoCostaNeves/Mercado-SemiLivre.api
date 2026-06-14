import { ProductVariation } from "src/modules/productVariation/entities/ProductVariation"
import { Prisma, ProductVariation as ProductVariationRaw } from "@prisma/client"

export class PrismaProductVariationMapper {

    static toPrisma({ id, name, price, quantity, description, product_id, status, createdAt, updatedAt }: ProductVariation): ProductVariationRaw {
        return {
            id,
            name,
            price: new Prisma.Decimal(price),
            quantity,
            description,
            product_id,
            status: status ?? true,
            createdAt,
            updatedAt,
        }
    }

    static toDomain({ id, ...data }: ProductVariationRaw): ProductVariation {
        return new ProductVariation(
            {
                ...data,
                price: Number(data.price),
            },
            id
        )
    }
}