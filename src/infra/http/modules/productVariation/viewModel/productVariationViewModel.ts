import { ProductVariation } from "src/modules/productVariation/entities/ProductVariation"

export class productVariationViewModel {
    static toHttp(productVariation: ProductVariation) {
        const { id, title, description, price, status, product_id, createdAt, updatedAt } = productVariation
        return {
            id,
            title,
            description,
            price,
            status,
            product_id,
            createdAt,
            updatedAt
        }
    }
}
