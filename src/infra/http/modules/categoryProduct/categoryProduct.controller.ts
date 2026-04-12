import { Body, Controller, Post } from "@nestjs/common"
import { CreateCategoryProductUseCase } from "src/modules/categoryProducts/useCases/createCategoryProductUseCase/createCategoryProductUseCase"
import { CreateCategoryProductBody } from "./dtos/createCategoryProduct"
import { categoryProductViewModel } from "./viewModel/CategoryProductViewModel"

@Controller('categoryProduct')
export class CategoryProductController {
    constructor(private CreateCategoryProductUseCase: CreateCategoryProductUseCase) { }

    @Post()
    async createPost(@Body() body: CreateCategoryProductBody) {
        const { name, status } = body

        const categoryProduct = this.CreateCategoryProductUseCase.execute({
            name,
            status
        })

        return categoryProductViewModel.toHttp(categoryProduct)
    }

}