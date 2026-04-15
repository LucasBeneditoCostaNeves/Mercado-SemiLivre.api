import { Module } from "@nestjs/common"
import { ProductController } from "./product.controller"
import { DatabaseModule } from "src/infra/database/database.module"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase"

@Module({
    imports: [DatabaseModule],
    controllers: [ProductController],
    providers: [CreateProductUseCase],
})

export class ProductModule { }