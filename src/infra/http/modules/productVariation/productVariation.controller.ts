import { Body, Controller, Get, Param, Patch, Post, UsePipes } from "@nestjs/common"
import { ListManyProductUseCase } from "src/modules/product/useCases/listManyProductUseCase/listManyProductUseCase"
import { UpdateProductUseCase } from "src/modules/product/useCases/updateProductUseCase/updateProductUseCase"
import { ZodValidationPipe } from "nestjs-zod"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase/createProductUseCase"
import { createProductVariationUseCase } from "src/modules/productVariation/useCases/createProductVariationUseCase/createProductVariationUseCase"



@Controller('productVariation')
@UsePipes(ZodValidationPipe)
export class ProductVariationController {

    constructor(private createProductVariationUseCase: createProductVariationUseCase) { }

    @Get()
    async list() {
        return []
    }

    // @Post()
    // async create(
    //     @Body() body: CreateProductBodyDto,
    // ) {

    //     const product = await this.createProductVariationUseCase.execute({
    //         ...body
    //     })

    //     return productViewModel.toHttp(product)
    // }
}
