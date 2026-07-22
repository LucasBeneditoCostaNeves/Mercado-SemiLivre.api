import { BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards, UseInterceptors, UsePipes, UploadedFile } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase/createProductUseCase"
import { productViewModel } from "./viewModel/ProductViewModel"
import { ListManyProductUseCase } from "src/modules/product/useCases/listManyProductUseCase/listManyProductUseCase"
import { UpdateProductUseCase } from "src/modules/product/useCases/updateProductUseCase/updateProductUseCase"
import { DeleteProductUseCase } from "src/modules/product/useCases/deleteProductUseCase/deleteProductUseCase"
import { ZodValidationPipe } from "nestjs-zod"
import { SellerProfileGuard } from "../auth/guards/sellerProfile.guard"
import { CurrentUser } from "../auth/decorators/currentUser.decorator"
import type { AuthenticatedUser } from "../auth/models/authRequestModel"
import { productImageUploadMulterOptions } from "../productVariation/config/productImageUpload.multer"
import {
    CreateProductBodyDto,
    UpdateProductBodyDto,
    UpdateProductParamsDto,
} from "./dtos/product.dto"


@Controller('product')
@UseGuards(SellerProfileGuard)
@UsePipes(ZodValidationPipe)
export class ProductController {

    constructor(
        private CreateProductUseCase: CreateProductUseCase,
        private ListManyProductUseCase: ListManyProductUseCase,
        private UpdateProductUseCase: UpdateProductUseCase,
        private DeleteProductUseCase: DeleteProductUseCase,
    ) { }

    @Post()
    async create(
        @CurrentUser() user: AuthenticatedUser,
        @Body() body: CreateProductBodyDto,
    ) {

        const product = await this.CreateProductUseCase.execute({
            ...body,
            seller_user_id: user.id,
        })

        return productViewModel.toHttp(product)
    }

    @Get()
    async listMany(@CurrentUser() user: AuthenticatedUser) {
        const product = await this.ListManyProductUseCase.execute({ sellerUserId: user.id })

        return product
    }

    @Patch("/:id")
    async updateProduct(
        @CurrentUser() user: AuthenticatedUser,
        @Param() params: UpdateProductParamsDto,
        @Body() body: UpdateProductBodyDto,
    ) {
        await this.UpdateProductUseCase.execute({
            dataProduct: {
                ...body,
                id: params.id,
            },
            sellerId: user.id,
        })
        return { message: "Produto atualizado com sucesso", status: 200 }
    }

    @Post("/:id/thumbnail")
    @UseInterceptors(FileInterceptor('thumbnail', productImageUploadMulterOptions))
    async uploadThumbnail(
        @CurrentUser() user: AuthenticatedUser,
        @Param() params: UpdateProductParamsDto,
        @UploadedFile() file?: Express.Multer.File,
    ) {
        if (!file) {
            throw new BadRequestException('Nenhum arquivo enviado.')
        }

        const thumbnail = `/uploads/products/${file.filename}`

        await this.UpdateProductUseCase.execute({
            dataProduct: { id: params.id, thumbnail },
            sellerId: user.id,
        })

        return { thumbnail }
    }

    @Delete("/:id")
    @HttpCode(204)
    async deleteProduct(
        @CurrentUser() user: AuthenticatedUser,
        @Param() params: UpdateProductParamsDto,
    ) {
        await this.DeleteProductUseCase.execute({
            id: params.id,
            sellerId: user.id,
        })
    }
}
