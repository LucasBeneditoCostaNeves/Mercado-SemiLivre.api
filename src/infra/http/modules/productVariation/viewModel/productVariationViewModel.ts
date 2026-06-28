import { ProductVariation } from "src/modules/productVariation/entities/ProductVariation"

export class productVariationViewModel {
    static toHttp(productVariation: ProductVariation) {
        const { id, name, description, price, status, product_id, createdAt, updatedAt } = productVariation
        return {
            id,
            name,
            description,
            price,
            status,
            product_id,
            createdAt,
            updatedAt
        }
    }
}