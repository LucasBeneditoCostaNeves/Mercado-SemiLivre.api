import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { ProfileController } from "./profile.controller";
import { CreateProfileUseCase } from "src/modules/profile/useCases/createProfileUseCase/createProfileUseCase";

@Module({
    imports: [DatabaseModule],
    controllers: [ProfileController],
    providers: [CreateProfileUseCase]
})

export class ProfileModule { }