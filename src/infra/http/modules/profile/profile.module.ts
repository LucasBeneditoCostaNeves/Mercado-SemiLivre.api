import { Module } from "@nestjs/common"
import { DatabaseModule } from "src/infra/database/database.module"
import { ProfileController } from "./profile.controller"
import { CreateProfileUseCase } from "src/modules/profile/useCases/createProfileUseCase/createProfileUseCase"
import { ListManyProfrileUseCase } from "src/modules/profile/useCases/listManyProfileUseCase/listManyProfileUseCase"

@Module({
    imports: [DatabaseModule],
    controllers: [ProfileController],
    providers: [CreateProfileUseCase, ListManyProfrileUseCase]
})

export class ProfileModule { }