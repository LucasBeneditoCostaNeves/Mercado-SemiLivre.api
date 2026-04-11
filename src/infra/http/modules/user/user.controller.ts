import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common"
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase"
import { CreateUserBody } from "./dtos/createUserBody"
import { userViewModel } from "./viewModel/userViewModel"
import { ListUserCase } from "src/modules/user/useCases/listUserUseCase/listUserUseCase"
import { Public } from "../auth/decorators/isPublic"
import { UpdateUserUseCase } from "src/modules/user/useCases/updateUserUseCase/updateUserUseCase"
import { UpdateUserBody } from "./dtos/updateUserBody"


@Controller('users')
export class UserController {

    constructor(private CreateUserUseCase: CreateUserUseCase, private ListUserCase: ListUserCase, private UpdateUserUseCase: UpdateUserUseCase) { }

    @Post()
    @Public()
    async createPost(@Body() body: CreateUserBody) {

        const { name, email, password, status, profileId } = body

        const user = await this.CreateUserUseCase.execute({
            name,
            email,
            password,
            status,
            profileId
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
        @Param("id") id: string,
        @Body() body: UpdateUserBody
    ) {
        const { name, email, status } = body

        await this.UpdateUserUseCase.execute({ id, name, email, status })
    }
}
