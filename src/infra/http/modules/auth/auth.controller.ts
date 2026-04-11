import { Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common"
import type { LocalAuthRequestModel } from "./models/authRequestModel"
import { LoginUseCase } from "src/modules/auth/useCases/loginUseCase/loginUseCase"
import { LocalAuthGuard } from "./guards/localAuth.Guard"
import { Public } from "./decorators/isPublic"


@Controller()
export class AuthController {

    constructor(private loginUseCase: LoginUseCase) { }

    @Post("login")
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @Public()
    async login(@Request() request: LocalAuthRequestModel) {
        const acess_token = await this.loginUseCase.execute({
            user: request.user
        })
        return { acess_token }
    }

    @Get("health")
    @Public()
    async health() {
        return "ok!"
    }
}