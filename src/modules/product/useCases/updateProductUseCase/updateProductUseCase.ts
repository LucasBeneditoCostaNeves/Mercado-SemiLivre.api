import { Injectable } from "@nestjs/common"
import { ProductRepository } from "../../repositories/ProductRepository"

@Injectable()
export class UpdateProductUseCase {
    constructor(private ProductRepository: ProductRepository) { }

    async execute({ dataProduct }) {
        await this.ProductRepository.updateProduct(dataProduct)
    }
}