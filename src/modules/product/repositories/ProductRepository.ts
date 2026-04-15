import { Product } from "../entities/Product"

interface IProductDTO {
    id: string
    name: string
    status: boolean
    category_product_id: string
    seller_user_id: string
    created_at: string
    updated_at: string
}

export abstract class ProductRepository {
    abstract create(product: Product): Promise<void>
}