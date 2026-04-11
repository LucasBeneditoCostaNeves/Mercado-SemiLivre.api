import { Module } from "@nestjs/common"
import { UserController } from "./user.controller"
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase"
import { DatabaseModule } from "src/infra/database/database.module"
import { ListUserCase } from "src/modules/user/useCases/listUserUseCase/listUserUseCase"
import { UpdateUserUseCase } from "src/modules/user/useCases/updateUserUseCase/updateUserUseCase"

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [CreateUserUseCase, ListUserCase, UpdateUserUseCase],
})

export class userModule { }