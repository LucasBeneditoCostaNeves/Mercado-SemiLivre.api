import { Injectable } from "@nestjs/common"
import { CategoryProductRepository } from "../../repositories/categoryProduct"

@Injectable()
export class ListCategoryProductUseCase {
    constructor(private categoryProductRepository: CategoryProductRepository) { }

    async execute() {
        const categoriesProduct = await this.categoryProductRepository.listMany()

        return categoriesProduct
    }
}