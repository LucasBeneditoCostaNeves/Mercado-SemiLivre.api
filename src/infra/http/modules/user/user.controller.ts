import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/modules/user/useCases/createUserUseCase/createUserUseCase";
import { CreateUserBody } from "./dtos/createUserBody";
import { userViewModel } from "./viewModel/userViewModel";


@Controller('users')
export class UserController {

    constructor(private CreateUserUseCase: CreateUserUseCase) { }

    @Post()
    async createPost(@Body() body: CreateUserBody) {

        const { name, email, password, status } = body;

        const user = await this.CreateUserUseCase.execute({
            name,
            email,
            password,
            status
        })

        return userViewModel.toHttp(user);
    }
}
