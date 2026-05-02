import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { CreateProfileUseCase } from "src/modules/profile/useCases/createProfileUseCase/createProfileUseCase"
import { ProfileViewModel } from "./viewModel/profileViewModel"
import { Public } from "../auth/decorators/isPublic"
import { ListManyProfrileUseCase } from "src/modules/profile/useCases/listManyProfileUseCase/listManyProfileUseCase"
import { ZodValidationPipe } from "nestjs-zod"
import { CreateProfileBodyDto } from "./dtos/profile.dto"

@Controller('profile')
@UsePipes(ZodValidationPipe)
export class ProfileController {

    constructor(private CreateProfileUseCase: CreateProfileUseCase, private ListManyProfrileUseCase: ListManyProfrileUseCase) { }

    @Post()
    @Public()
    async createPost(@Body() body: CreateProfileBodyDto) {
        const profile = await this.CreateProfileUseCase.execute({
            ...body
        })

        return ProfileViewModel.toHttp(profile)
    }

    @Get()
    async listManyProfiles() {
        const profiles = await this.ListManyProfrileUseCase.execute({})

        return profiles
    }

    // @Get()
    // async listUser() {
    //     const users = await this.ListUserCase.execute({})

    //     return users
    // }
}
