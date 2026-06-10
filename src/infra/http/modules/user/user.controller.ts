import { Body, Controller, Get, Param, Patch, Post, Request, UsePipes, ValidationPipe } from "@nestjs/common"
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase"
import { userViewModel } from "./viewModel/userViewModel"
import { ListUserCase } from "src/modules/user/useCases/listUserUseCase/listUserUseCase"
import { Public } from "../auth/decorators/isPublic"
import { UpdateUserUseCase } from "src/modules/user/useCases/updateUserUseCase/updateUserUseCase"
import type { AuthRequestModel } from "../auth/models/authRequestModel"
import { ZodValidationPipe } from "nestjs-zod"
import { CreateUserBodyDto, UpdateUserBodyDto, UpdateUserParamsDto } from "./dtos/user.dto"


@Controller('users')
@UsePipes(ZodValidationPipe)
export class UserController {

    constructor(private CreateUserUseCase: CreateUserUseCase, private ListUserCase: ListUserCase, private UpdateUserUseCase: UpdateUserUseCase) { }

    @Post()
    @Public()
    async createPost(@Body() body: CreateUserBodyDto) {
        const user = await this.CreateUserUseCase.execute({
            ...body
        })

        return userViewModel.toHttp(user)
    }

    @Get()
    async listUser() {
        const users = await this.ListUserCase.execute({})

        return users
    }

    @Patch(":id")
    async updateUser(
        @Request() request: AuthRequestModel,
        @Param() params: UpdateUserParamsDto,
        @Body() body: UpdateUserBodyDto,
    ) {
        await this.UpdateUserUseCase.execute({
            actor: {
                id: request.user.id,
                profileId: request.user.profileId,
            },
            id: params.id,
            ...body
        })
    }
}
