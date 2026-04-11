import { Injectable } from "@nestjs/common"
import { ProfileRepository } from "../../repositories/ProfileRepository"

@Injectable()
export class ListManyProfrileUseCase {
    constructor(private profileRepository: ProfileRepository) { }

    async execute({ }: any) {
        const profiles = await this.profileRepository.listMany()
        return profiles
    }
}