import { Body, Controller, Get, Param, Patch, Post, UsePipes } from "@nestjs/common"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase/createProductUseCase"
import { productViewModel } from "./viewModel/ProductViewModel"
import { ListManyProductUseCase } from "src/modules/product/useCases/listManyProductUseCase/listManyProductUseCase"
import { UpdateProductUseCase } from "src/modules/product/useCases/updateProductUseCase/updateProductUseCase"
import { ZodValidationPipe } from "nestjs-zod"
import {
    CreateProductBodyDto,
    UpdateProductBodyDto,
    UpdateProductParamsDto,
} from "./dtos/product.dto"


@Controller('product')
@UsePipes(ZodValidationPipe)
export class ProductController {

    constructor(private CreateProductUseCase: CreateProductUseCase, private ListManyProductUseCase: ListManyProductUseCase, private UpdateProductUseCase: UpdateProductUseCase) { }

    @Post()
    async create(
        @Body() body: CreateProductBodyDto,
    ) {

        const product = await this.CreateProductUseCase.execute({
            ...body
        })

        return productViewModel.toHttp(product)
    }

    @Get()
    async listMany() {
        const product = await this.ListManyProductUseCase.execute({})

        return product
    }

    @Patch("/:id")
    async updateProduct(
        @Param() params: UpdateProductParamsDto,
        @Body() body: UpdateProductBodyDto,
    ) {
        await this.UpdateProductUseCase.execute({
            dataProduct: {
                ...body,
                id: params.id,
            },
        })
        return { message: "Produto atualizado com sucesso", status: 200 }
    }
}
