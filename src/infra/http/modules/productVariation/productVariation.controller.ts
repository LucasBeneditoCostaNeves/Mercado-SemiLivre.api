import { Body, Controller, Get, Param, Patch, Post, UsePipes } from "@nestjs/common"
import { ZodValidationPipe } from "nestjs-zod"
import { createProductVariationUseCase } from "src/modules/productVariation/useCases/createProductVariationUseCase/createProductVariationUseCase"
import { createProductVariationBodyDto } from "./dtos/productVariation.dto"
import { productVariationViewModel } from "./viewModel/productVariationViewModel"



@Controller('productVariation')
@UsePipes(ZodValidationPipe)
export class ProductVariationController {

    constructor(private createProductVariationUseCase: createProductVariationUseCase) { }

    @Get()
    async list() {
        return []
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
