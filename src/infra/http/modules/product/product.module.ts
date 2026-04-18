import { Module } from "@nestjs/common"
import { ProductController } from "./product.controller"
import { DatabaseModule } from "src/infra/database/database.module"
import { CreateProductUseCase } from "src/modules/product/useCases/createProductUseCase/createProductUseCase"
import { ListManyProductUseCase } from "src/modules/product/useCases/listManyProductUseCase/listManyProductUseCase"
import { UpdateUserUseCase } from "src/modules/user/useCases/updateUserUseCase/updateUserUseCase"
import { updateProductUseCase } from "src/modules/product/useCases/updateProductUseCase/updateProductUseCase"

@Module({
    imports: [DatabaseModule],
    controllers: [ProductController],
    providers: [CreateProductUseCase, ListManyProductUseCase, updateProductUseCase],
})

export class ProductModule { }