import { Body, Controller, Get, Post } from "@nestjs/common"
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase"
import { CreateUserBody } from "./dtos/createUserBody"
import { userViewModel } from "./viewModel/userViewModel"
import { ListUserCase } from "src/modules/user/useCases/listUserUseCase/listUserUseCase"
import { Public } from "../auth/decorators/isPublic"


@Controller('users')
export class UserController {

    constructor(private CreateUserUseCase: CreateUserUseCase, private ListUserCase: ListUserCase) { }

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
}
