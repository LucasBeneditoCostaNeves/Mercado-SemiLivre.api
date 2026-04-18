import { Injectable } from "@nestjs/common"
import { IProductUpdateDTO, ProductRepository } from "../../repositories/ProductRepository"

interface IProductUpdateRequest {
    dataProduct: IProductUpdateDTO
}

@Injectable()
export class UpdateProductUseCase {
    constructor(private ProductRepository: ProductRepository) { }

    async execute({ dataProduct }: IProductUpdateRequest) {
        await this.ProductRepository.updateProduct(dataProduct)
    }
}