import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase";
import { DatabaseModule } from "src/infra/database/database.module";
import { ListUserCase } from "src/modules/user/useCases/listUserUseCase/listUserUseCase";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [CreateUserUseCase, ListUserCase],
})

export class userModule { }