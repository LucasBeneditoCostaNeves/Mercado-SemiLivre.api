import { Product } from "src/modules/product/entities/Product"

export class productViewModel {
    static toHttp({ id, title, category_product_id, seller_user_id, status, createdAt, updatedAt }: Product) {
        return {
            id,
            title,
            category_product_id,
            seller_user_id,
            status,
            createdAt,
            updatedAt
        }
    }
}
