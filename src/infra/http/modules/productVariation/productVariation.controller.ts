import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ZodValidationPipe } from 'nestjs-zod';
import { createProductVariationUseCase } from 'src/modules/productVariation/useCases/createProductVariationUseCase/createProductVariationUseCase';
import { UpdateProductVariationUseCase } from 'src/modules/productVariation/useCases/updateProductVariationUseCase/updateProductVariationUseCase';
import {
  createProductVariationBodyDto,
  UpdateProductVariationBodyDto,
  UpdateProductVariationParamsDto,
} from './dtos/productVariation.dto';
import { productVariationViewModel } from './viewModel/productVariationViewModel';
import { listProductVariationUseCase } from 'src/modules/productVariation/useCases/listProductVariationUseCase/listProductVariationUseCase';
import { SellerProfileGuard } from '../auth/guards/sellerProfile.guard';
import { CurrentUser } from '../auth/decorators/currentUser.decorator';
import type { AuthenticatedUser } from '../auth/models/authRequestModel';
import { ProductVariationImageService } from './productVariationImage.service';
import { productImageUploadMulterOptions } from './config/productImageUpload.multer';

@Controller('productVariation')
@UsePipes(ZodValidationPipe)
export class ProductVariationController {
  constructor(
    private createProductVariationUseCase: createProductVariationUseCase,
    private updateProductVariationUseCase: UpdateProductVariationUseCase,
    private listProductVariationUseCase: listProductVariationUseCase,
    private productVariationImageService: ProductVariationImageService,
  ) {}

  @Get()
  async list() {
    const productVariations = await this.listProductVariationUseCase.execute();
    return productVariations;
  }

  @Post()
  @UseGuards(SellerProfileGuard)
  async create(
    @CurrentUser() user: AuthenticatedUser,
    @Body() body: createProductVariationBodyDto,
  ) {
    const product = await this.createProductVariationUseCase.execute({
      ...body,
      sellerId: user.id,
    });

    return productVariationViewModel.toHttp(product);
  }

  @Patch('/:id')
  @UseGuards(SellerProfileGuard)
  async update(
    @CurrentUser() user: AuthenticatedUser,
    @Param() params: UpdateProductVariationParamsDto,
    @Body() body: UpdateProductVariationBodyDto,
  ) {
    await this.updateProductVariationUseCase.execute({
      dataVariation: { ...body, id: params.id },
      sellerId: user.id,
    });

    return { message: 'Variação atualizada com sucesso' };
  }

  @Post('/:id/images')
  @UseGuards(SellerProfileGuard)
  @UseInterceptors(
    FilesInterceptor('images', 8, productImageUploadMulterOptions),
  )
  async addImages(
    @CurrentUser() user: AuthenticatedUser,
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.productVariationImageService.addImages(
      id,
      user.id,
      files ?? [],
    );
  }

  @Delete('/images/:imageId')
  @UseGuards(SellerProfileGuard)
  async removeImage(
    @CurrentUser() user: AuthenticatedUser,
    @Param('imageId') imageId: string,
  ) {
    await this.productVariationImageService.removeImage(imageId, user.id);
    return { message: 'Imagem removida com sucesso' };
  }
}
