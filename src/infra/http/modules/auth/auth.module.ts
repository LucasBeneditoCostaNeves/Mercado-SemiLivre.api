import { MiddlewareConsumer, Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { AuthController } from "./auth.controller";
import { ValidateUserUseCase } from "src/modules/auth/useCases/validadeUserUseCase";
import { LocalStrategy } from "src/modules/auth/strategies/local.strategy";
import { userModule } from "../user/user.module";
import { LoginDTOValidateMiddleware } from "./middleware/loginDTOValidate";

@Module({
    imports: [DatabaseModule, userModule],
    controllers: [AuthController],
    providers: [LocalStrategy, ValidateUserUseCase],
})

export class authModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoginDTOValidateMiddleware).forRoutes("/login")
    }
}