import { Injectable } from "@nestjs/common"
import { UserRepository } from "../../reposiories/UserRepository"

export interface IUpdateUserUseCase {
    id: string
    name?: string
    email?: string
    status?: boolean
}

@Injectable()
export class UpdateUserUseCase {
    constructor(private UserRepository: UserRepository) { }

    async execute({ id, name, email, status }: IUpdateUserUseCase) {
        await this.UserRepository.updateUser({ id, name, email, status })
    }
}