import { Injectable } from "@nestjs/common"
import { Profile } from "../../entities/Profile"
import { ProfileRepository } from "../../repositories/ProfileRepository"

interface CreatedProfileRequest {
    name: string
}

@Injectable()
export class CreateProfileUseCase {
    constructor(private profileRepository: ProfileRepository) { }

    async execute({ name }: CreatedProfileRequest) {
        const profile = new Profile({
            name
        })

        await this.profileRepository.create(profile)

        return profile
    }
}