import { Injectable } from "@nestjs/common"
import { UserRepository } from "../../repositories/UserRepository"


@Injectable()
export class ListUserCase {
    constructor(private UserRepository: UserRepository) { }

    async execute({ }) {
        const users = await this.UserRepository.findMany()

        return users
    }
}