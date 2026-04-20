import { Injectable } from "@nestjs/common"
import { UserRepository } from "../../repositories/UserRepository"
import { User } from "../../entities/User"
import { hash } from "bcrypt"
import { EmailAlreadyInUseError } from "src/domain/errors/user/EmailAlreadyInUseError"

interface CreatedUserRequest {
    email: string
    name: string
    password: string,
    status: boolean,
    profileId: string
}

@Injectable()
export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute({ email, name, password, status, profileId }: CreatedUserRequest) {

        const existsByEmail: boolean = await this.userRepository.exisByEmail(email)

        if (existsByEmail) {
            throw new EmailAlreadyInUseError()
        }

        const user = new User({
            email,
            name,
            profileId,
            password: await hash(password, 10),
            status
        })

        await this.userRepository.create(user)

        return user
    }
}