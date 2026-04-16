import { Body, Controller, Post } from "@nestjs/common"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase"
import { CreateProductBody } from "./dtos/createProduct"
import { productViewModel } from "./viewModel/ProductViewModel"

@Controller('product')
export class ProductController {
    constructor(private CreateProductUseCase: CreateProductUseCase) { }

    @Post()
    async create(@Body() body: CreateProductBody) {
        const product = await this.CreateProductUseCase.execute(body)

        return productViewModel.toHttp(product)
    }
}