import { Injectable } from "@nestjs/common"
import { ProductRepository } from "../../repositories/ProductRepository"

interface IListManyProductRequest {
    sellerUserId?: string
}

@Injectable()
export class ListManyProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async execute({ sellerUserId }: IListManyProductRequest) {
        const products = await this.productRepository.findMany(
            sellerUserId ? { sellerUserId } : undefined
        )

        return products
    }
}