import { Body, Controller, Get, Param, Patch, Post, UsePipes } from "@nestjs/common"
import { ZodValidationPipe } from "nestjs-zod"
import { createProductVariationUseCase } from "src/modules/productVariation/useCases/createProductVariationUseCase/createProductVariationUseCase"
import { createProductVariationBodyDto } from "./dtos/productVariation.dto"
import { productVariationViewModel } from "./viewModel/productVariationViewModel"
import { listProductVariationUseCase } from "src/modules/productVariation/useCases/listProductVariationUseCase/listProductVariationUseCase"



@Controller('productVariation')
@UsePipes(ZodValidationPipe)
export class ProductVariationController {

    constructor(private createProductVariationUseCase: createProductVariationUseCase, private listProductVariationUseCase: listProductVariationUseCase) { }

    @Get()
    async list() {
        const productVariations = await this.listProductVariationUseCase.execute()
        return productVariations
    }

    @Post()
    async create(
        @Body() body: createProductVariationBodyDto,
    ) {

        const product = await this.createProductVariationUseCase.execute({
            ...body
        })

        return productVariationViewModel.toHttp(product)
    }
}
