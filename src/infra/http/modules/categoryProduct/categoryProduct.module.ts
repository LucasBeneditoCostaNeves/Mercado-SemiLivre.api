import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/infra/database/database.module"
import { CategoryProductController } from "./categoryProduct.controller"
import { CreateCategoryProductUseCase } from "src/modules/categoryProducts/useCases/createCategoryProductUseCase/createCategoryProductUseCase"
import { ListCategoryProductUseCase } from "src/modules/categoryProducts/useCases/listCategoryProductUseCase/listCategoryProductUseCase"

@Module({
    imports: [DatabaseModule],
    controllers: [CategoryProductController],
    providers: [
        CreateCategoryProductUseCase,
        ListCategoryProductUseCase
    ],
})

export class CategoryProductModule { }