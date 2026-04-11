import { User } from "../entities/User"

export interface IUserDTO {
    id: string
    name: string
    email: string
    password: string
    status: boolean
    profileId: string
    createdAt: Date
    updatedAt: Date
}


export abstract class UserRepository {
    abstract create(user: User): Promise<void>
    abstract findByEmail(email: string): Promise<User | null>
    abstract listManyUser(): Promise<IUserDTO[] | null>
}