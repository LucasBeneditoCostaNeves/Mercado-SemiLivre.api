import { LoginUseCase } from "./loginUseCase"
import { JwtService } from "@nestjs/jwt"
import { makeUser } from "src/modules/user/factories/userFactory"
import { UserPaylaod } from "../../models/UserPayload"

let loginUseCase: LoginUseCase
let jwtService: JwtService

describe("Login", () => {

    beforeEach(() => {
        jwtService = new JwtService({ secret: 'secret' })
        loginUseCase = new LoginUseCase(jwtService)
    })

    it('Criando acess_token', async () => {
        const user = makeUser({})

        const token = await loginUseCase.execute({ user, })

        const payload = jwtService.decode(token) as UserPaylaod

        expect(payload.sub).toEqual(user.id)
    })
})