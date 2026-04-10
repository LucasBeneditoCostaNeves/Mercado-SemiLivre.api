import { Profile } from "../entities/Profile"
import { ProfileRepository } from "./ProfileRepository"

export class ProfileRepositoryInMemory implements ProfileRepository {
    public profiles: Profile[] = []

    async create(profile: Profile): Promise<void> {
        this.profiles.push(profile)
    }
}