import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase/createProductUseCase"
import { CreateProductBody } from "./dtos/createProduct"
import { productViewModel } from "./viewModel/ProductViewModel"
import { ListManyProductUseCase } from "src/modules/product/useCases/listManyProductUseCase/listManyProductUseCase"
import { UpdateProductBody } from "./dtos/updateProduct"
import { updateProductUseCase } from "src/modules/product/useCases/updateProductUseCase/updateProductUseCase"

@Controller('product')
export class ProductController {
    constructor(private CreateProductUseCase: CreateProductUseCase, private ListManyProductUseCase: ListManyProductUseCase, private UpdateProductUseCase: updateProductUseCase) { }

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

    @Patch("/:id")
    async updateProduct(
        @Body() body: UpdateProductBody,
        @Param("id") id: string,
    ) {
        const dataProduct = { ...body, id }
        await this.UpdateProductUseCase.execute({ dataProduct })
    }
}