
import { CategoryProducts as CategoryProductRaw } from "@prisma/client"
import { CategoryProduct } from "src/modules/categoryProducts/entities/categoryProducts"

export class PrismaCategoryProductMapper {

    static toPrisma({ id, name, status, createdAt, updatedAt }: CategoryProduct): CategoryProductRaw {
        return {
            id,
            name,
            status,
            createdAt,
            updatedAt,
        }
    }

    static toDomain({ id, ...profileData }: CategoryProductRaw): CategoryProduct {
        return new CategoryProduct(
            {
                ...profileData,
            },
            id
        )
    }
}