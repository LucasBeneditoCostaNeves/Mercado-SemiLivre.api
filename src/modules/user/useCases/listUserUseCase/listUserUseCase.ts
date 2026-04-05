import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../reposiories/UserRepository";


@Injectable()
export class ListUserCase {
    constructor(private UserRepository: UserRepository) { }

    async execute({ }: any) {
        const users = await this.UserRepository.listManyUser()

        return users
    }
}