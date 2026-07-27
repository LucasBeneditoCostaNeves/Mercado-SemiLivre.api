import { Injectable } from "@nestjs/common"
import { ProductRepository } from "../../repositories/ProductRepository"
import { ProductNotFoundError } from "src/domain/errors/product/ProductNotFoundError"
import { ProductForbiddenError } from "src/domain/errors/product/ProductForbiddenError"

interface IDeleteProductRequest {
    id: string
    sellerId: string
}

@Injectable()
export class DeleteProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute({ id, sellerId }: IDeleteProductRequest): Promise<void> {
        const product = await this.productRepository.findById(id)

        if (!product) {
            throw new ProductNotFoundError()
        }

        if (product.seller_user_id !== sellerId) {
            throw new ProductForbiddenError()
        }

        await this.productRepository.delete(id)
    }
}
