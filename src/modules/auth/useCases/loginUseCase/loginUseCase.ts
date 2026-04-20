import { Injectable } from "@nestjs/common"
import { User } from "@prisma/client"
import { UserPaylaod } from "../../models/UserPayload"
import { JwtService } from "@nestjs/jwt"

interface LoginRequest {
    user: User
}

@Injectable()
export class LoginUseCase {
    constructor(private jwtService: JwtService) { }

    async execute({ user }: LoginRequest) {
        const payload: UserPaylaod = {
            sub: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt.toJSON(),
            profileId: user.profileId,
        }

        const jwtToken = this.jwtService.sign(payload)

        return jwtToken
    }
}