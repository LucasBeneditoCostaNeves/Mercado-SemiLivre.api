import { Body, Controller, Get, Post } from "@nestjs/common"
import { CreateProfileUseCase } from "src/modules/profile/useCases/createProfileUseCase/createProfileUseCase"
import { ProfileViewModel } from "./viewModel/profileViewModel"
import { CreateUserBody } from "./dtos/createProfileBody"
import { Public } from "../auth/decorators/isPublic"


@Controller('profile')
export class ProfileController {

    constructor(private CreateProfileUseCase: CreateProfileUseCase) { }

    @Post()
    @Public()
    async createPost(@Body() body: CreateUserBody) {

        const { name } = body

        const profile = await this.CreateProfileUseCase.execute({
            name
        })

        return ProfileViewModel.toHttp(profile)
    }

    // @Get()
    // async listUser() {
    //     const users = await this.ListUserCase.execute({})

    //     return users
    // }
}
