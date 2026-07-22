import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { ProductVariationController } from "./productVariation.controller";
import { createProductVariationUseCase } from "src/modules/productVariation/useCases/createProductVariationUseCase/createProductVariationUseCase";
import { listProductVariationUseCase } from "src/modules/productVariation/useCases/listProductVariationUseCase/listProductVariationUseCase";
import { ProductVariationImageService } from "./productVariationImage.service";

@Module({
    imports: [DatabaseModule],
    controllers: [ProductVariationController],
    providers: [createProductVariationUseCase, listProductVariationUseCase, ProductVariationImageService]
})

export class ProductVariationModule { }