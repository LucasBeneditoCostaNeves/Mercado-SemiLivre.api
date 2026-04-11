import { Injectable } from "@nestjs/common"
import {
    type ActorContext,
    UserAuthorizationPolicyImpl,
} from "../../policies/user-authorization.policy"
import { UserRepository } from "../../reposiories/UserRepository"

export interface IUpdateUserUseCase {
    actor: ActorContext
    id: string
    name?: string
    email?: string
    status?: boolean
}

@Injectable()
export class UpdateUserUseCase {
    constructor(
        private UserRepository: UserRepository,
        private userAuthorization: UserAuthorizationPolicyImpl,
    ) {}

    async execute({ actor, id, name, email, status }: IUpdateUserUseCase) {
        this.userAuthorization.assertCanUpdate(actor, id)

        await this.UserRepository.updateUser({ id, name, email, status })
    }
}