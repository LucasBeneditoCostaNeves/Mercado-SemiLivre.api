import { Profile } from "../entities/Profile"

export abstract class ProfileRepository {
    abstract create(profile: Profile): Promise<void>
}