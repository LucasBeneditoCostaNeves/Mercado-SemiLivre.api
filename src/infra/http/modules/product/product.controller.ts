import { Body, Controller, Get, Post } from "@nestjs/common"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase/createProductUseCase"
import { CreateProductBody } from "./dtos/createProduct"
import { productViewModel } from "./viewModel/ProductViewModel"
import { ListManyProductUseCase } from "src/modules/product/useCases/listManyProductUseCase/listManyProductUseCase"

@Controller('product')
export class ProductController {
    constructor(private CreateProductUseCase: CreateProductUseCase, private ListManyProductUseCase: ListManyProductUseCase) { }

    @Post()
    async create(@Body() body: CreateProductBody) {
        const product = await this.CreateProductUseCase.execute(body)

        return productViewModel.toHttp(product)
    }

    @Get()
    async listMany() {
        const product = await this.ListManyProductUseCase.execute({})

        return product
    }
}