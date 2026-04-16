import { Product } from "@prisma/client"

export class productViewModel {
    static toHttp({ id, name, category_product_id, seller_user_id, status, createdAt, updatedAt }: Product) {
        return {
            id,
            name,
            category_product_id,
            seller_user_id,
            status,
            createdAt,
            updatedAt
        }
    }
}