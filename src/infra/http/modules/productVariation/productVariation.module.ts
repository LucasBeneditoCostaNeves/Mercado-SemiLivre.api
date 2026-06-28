import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { ProductVariationController } from "./productVariation.controller";
import { createProductVariationUseCase } from "src/modules/productVariation/useCases/createProductVariationUseCase/createProductVariationUseCase";
import { listProductVariationUseCase } from "src/modules/productVariation/useCases/listProductVariationUseCase/listProductVariationUseCase";

@Module({
    imports: [DatabaseModule],
    controllers: [ProductVariationController],
    providers: [createProductVariationUseCase, listProductVariationUseCase]
})

export class ProductVariationModule { }