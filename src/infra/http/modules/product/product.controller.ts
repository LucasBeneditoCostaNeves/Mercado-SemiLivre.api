import { BadRequestException, Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Patch, Post } from "@nestjs/common"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase/createProductUseCase"
import { CreateProductBody } from "./dtos/createProduct"
import { productViewModel } from "./viewModel/ProductViewModel"
import { ListManyProductUseCase } from "src/modules/product/useCases/listManyProductUseCase/listManyProductUseCase"
import { UpdateProductBody, UpdateProductParams } from "./dtos/updateProduct"
import { UpdateProductUseCase } from "src/modules/product/useCases/updateProductUseCase/updateProductUseCase"
import { NoFieldsToUpdateError } from "src/domain/errors/NoFieldsToUpdateError"
import { ProductNotFoundError } from "src/domain/errors/product/ProductNotFoundError"

@Controller('product')
export class ProductController {
    constructor(private CreateProductUseCase: CreateProductUseCase, private ListManyProductUseCase: ListManyProductUseCase, private UpdateProductUseCase: UpdateProductUseCase) { }

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
        @Param() params: UpdateProductParams,
    ) {
        await this.UpdateProductUseCase.execute({ dataProduct: { ...body, id: params.id } })
        return { message: "Produto atualizado com sucesso", status: 200 }
    }
}