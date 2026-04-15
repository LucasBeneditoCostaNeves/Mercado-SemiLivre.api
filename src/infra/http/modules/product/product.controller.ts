import { Body, Controller, Post } from "@nestjs/common"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase"
import { CreateProductBody } from "./dtos/createProduct"

@Controller('product')
export class ProductController {
    constructor(private CreateProductUseCase: CreateProductUseCase) { }

    @Post()
    async create(@Body() body: CreateProductBody) {
        const product = this.CreateProductUseCase.execute(body)

        return product
    }
}