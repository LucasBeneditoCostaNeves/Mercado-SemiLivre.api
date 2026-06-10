import { User } from "../entities/User"
import { UserRepository } from "./UserRepository"

export interface IUserUpdateDTO {
    id: string
    name?: string
    email?: string
    status?: boolean
}

export class UserRepositoryInMemory implements UserRepository {
    public users: User[] = []

    async create(user: User): Promise<void> {
        this.users.push(user)
    }

    async findByEmail(email: String): Promise<User | null> {
        const user = this.users.find(user => user.email == email)

        if (!user) {
            return null
        }

        return user
    }

    async findMany(): Promise<User[]> {
        return this.users
    }

    async update(datatUser: IUserUpdateDTO) {
        const userSelected = this.users.find((user) => user.id === datatUser.id)

        if (!userSelected) {
            throw new Error("User not found")
        }

        userSelected.name = datatUser.name || userSelected.name
        userSelected.email = datatUser.email || userSelected.email
        userSelected.status = datatUser.status || userSelected.status
    }

    async exisByEmail(email: string): Promise<boolean> {
        return this.users.some((user) => user.email === email)
    }
}