import { MiddlewareConsumer, Module } from "@nestjs/common"
import { DatabaseModule } from "src/infra/database/database.module"
import { AuthController } from "./auth.controller"
import { ValidateUserUseCase } from "src/modules/auth/useCases/validateUserUseCase/validateUserUseCase"
import { LocalStrategy } from "src/modules/auth/strategies/local.strategy"
import { UserModule } from "../user/user.module"
import { LoginDTOValidateMiddleware } from "./middleware/loginDTOValidate"
import { LoginUseCase } from "src/modules/auth/useCases/loginUseCase/loginUseCase"
import { JwtModule } from "@nestjs/jwt"
import { JwtStrategy } from "src/modules/auth/strategies/jwt.strategy"

@Module({
    imports: [DatabaseModule, UserModule, JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: "30 days" }
    })],
    controllers: [AuthController],
    providers: [LocalStrategy, JwtStrategy, ValidateUserUseCase, LoginUseCase],
})

export class AuthModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoginDTOValidateMiddleware).forRoutes("/login")
    }
}