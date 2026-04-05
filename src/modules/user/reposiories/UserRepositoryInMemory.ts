import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";

export class UserRepositoryInMemory implements UserRepository {
    public users: User[] = []

    async create(user: User): Promise<void> {
        this.users.push(user);
    }

    async findByEmail(email: String): Promise<User | null> {
        const user = this.users.find(user => user.email == email)

        if (!user) {
            return null
        }

        return user
    }

    async listManyUser(): Promise<User[] | null> {
        return this.users
    }
}