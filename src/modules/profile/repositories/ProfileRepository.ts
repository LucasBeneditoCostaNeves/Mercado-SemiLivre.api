import { Profile } from "../entities/Profile"

export interface ProfileDTO {
    id: string
    name: string,
    createdAt: Date,
    updatedAt: Date
}

export abstract class ProfileRepository {
    abstract create(profile: Profile): Promise<void>
    abstract listMany(): Promise<ProfileDTO[]>
}