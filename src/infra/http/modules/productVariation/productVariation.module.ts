import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ProductVariationController } from './productVariation.controller';
import { createProductVariationUseCase } from 'src/modules/productVariation/useCases/createProductVariationUseCase/createProductVariationUseCase';
import { UpdateProductVariationUseCase } from 'src/modules/productVariation/useCases/updateProductVariationUseCase/updateProductVariationUseCase';
import { listProductVariationUseCase } from 'src/modules/productVariation/useCases/listProductVariationUseCase/listProductVariationUseCase';
import { ProductVariationImageService } from './productVariationImage.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductVariationController],
  providers: [
    createProductVariationUseCase,
    UpdateProductVariationUseCase,
    listProductVariationUseCase,
    ProductVariationImageService,
  ],
})
export class ProductVariationModule {}
