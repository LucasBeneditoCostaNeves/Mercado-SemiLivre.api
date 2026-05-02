import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { CreateCategoryProductUseCase } from "src/modules/categoryProducts/useCases/createCategoryProductUseCase/createCategoryProductUseCase"
import { categoryProductViewModel } from "./viewModel/CategoryProductViewModel"
import { ListCategoryProductUseCase } from "src/modules/categoryProducts/useCases/listCategoryProductUseCase/listCategoryProductUseCase"
import { ZodValidationPipe } from "nestjs-zod"
import { CreateCategoryProductBodyDto } from "./dtos/categoryProduct.dto"

@Controller('categoryProduct')
@UsePipes(ZodValidationPipe)
export class CategoryProductController {
    constructor(private CreateCategoryProductUseCase: CreateCategoryProductUseCase, private ListCategoryProductUseCase: ListCategoryProductUseCase) { }

    @Post()
    async createPost(@Body() body: CreateCategoryProductBodyDto) {
        const categoryProduct = this.CreateCategoryProductUseCase.execute({
            ...body
        })

        return categoryProductViewModel.toHttp(categoryProduct)
    }

    @Get()
    async listCategoryProduct() {
        const categoriesProducts = await this.ListCategoryProductUseCase.execute()

        return categoriesProducts
    }
}