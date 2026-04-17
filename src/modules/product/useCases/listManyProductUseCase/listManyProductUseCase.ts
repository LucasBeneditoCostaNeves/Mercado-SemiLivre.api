import { Injectable } from "@nestjs/common"
import { ProductRepository } from "../../repositories/ProductRepository"

@Injectable()
export class ListManyProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute({ }) {
        const products = await this.productRepository.listMany()

        return products
    }
}