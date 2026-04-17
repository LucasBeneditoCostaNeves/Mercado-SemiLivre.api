import { Injectable } from "@nestjs/common"
import { Product } from "../../entities/Product"
import { ProductRepository } from "../../repositories/ProductRepository"

interface IProductRequest {
    name: string
    seller_user_id: string
    category_product_id: string
    status: boolean
}

@Injectable()
export class CreateProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute({ name, seller_user_id, category_product_id, status }: IProductRequest) {
        const product = await new Product({
            name,
            seller_user_id,
            status,
            category_product_id
        })

        this.productRepository.create(product)

        return product
    }
}