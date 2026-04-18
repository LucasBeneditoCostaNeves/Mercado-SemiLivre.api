import { Injectable } from "@nestjs/common"
import { ProductRepository } from "../../repositories/ProductRepository"

@Injectable()
export class updateProductUseCase {
    constructor(private ProductRepository: ProductRepository) { }

    async execute({ dataProduct }) {
        await this.ProductRepository.updateProduct(dataProduct)
    }
}