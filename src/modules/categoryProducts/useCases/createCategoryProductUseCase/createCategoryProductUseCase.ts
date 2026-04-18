import { Injectable } from "@nestjs/common"
import { CategoryProduct } from "../../entities/categoryProducts"
import { CategoryProductRepository } from "../../repositories/categoryProduct"

interface ICreatedCategoryProductsRequest {
    name: string
    status: boolean
}

@Injectable()
export class CreateCategoryProductUseCase {
    constructor(private categoryProductRepository: CategoryProductRepository) { }

    execute({ name, status }: ICreatedCategoryProductsRequest) {
        const categoryProduct = new CategoryProduct({
            name,
            status
        })

        this.categoryProductRepository.create(categoryProduct)

        return categoryProduct
    }
}