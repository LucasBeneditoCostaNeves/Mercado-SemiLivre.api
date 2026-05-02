import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { CreateCategoryProductUseCase } from "src/modules/categoryProducts/useCases/createCategoryProductUseCase/createCategoryProductUseCase"
import { CreateCategoryProductBody } from "./dtos/createCategoryProduct"
import { categoryProductViewModel } from "./viewModel/CategoryProductViewModel"
import { ListCategoryProductUseCase } from "src/modules/categoryProducts/useCases/listCategoryProductUseCase/listCategoryProductUseCase"

@Controller('categoryProduct')
@UsePipes(
    new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }),
)
export class CategoryProductController {
    constructor(private CreateCategoryProductUseCase: CreateCategoryProductUseCase, private ListCategoryProductUseCase: ListCategoryProductUseCase) { }

    @Post()
    async createPost(@Body() body: CreateCategoryProductBody) {
        const { name, status } = body

        const categoryProduct = this.CreateCategoryProductUseCase.execute({
            name,
            status
        })

        return categoryProductViewModel.toHttp(categoryProduct)
    }

    @Get()
    async listCategoryProduct() {
        const categoriesProducts = await this.ListCategoryProductUseCase.execute()

        return categoriesProducts
    }
}