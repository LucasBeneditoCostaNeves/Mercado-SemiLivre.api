import { Injectable } from "@nestjs/common"
import { Product } from "../../entities/Product"
import { ProductRepository } from "../../repositories/ProductRepository"

interface IProductRequest {
    title: string
    seller_user_id: string
    category_product_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    status: boolean
}

@Injectable()
export class CreateProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute({ title, seller_user_id, category_product_id, brand_id, thumbnail, warrantyInformation, status }: IProductRequest) {
        const product = new Product({
            title,
            seller_user_id,
            status,
            category_product_id,
            brand_id,
            thumbnail,
            warrantyInformation,
        })

        await this.productRepository.create(product)

        return product
    }
}
