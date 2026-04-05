import { UserRepositoryInMemory } from "src/modules/user/reposiories/UserRepositoryInMemory";
import { ValidateUserUseCase } from "./validadeUserUseCase";
import { User } from "src/modules/user/entities/User";
import { hash } from "bcrypt"
import { dmmfToRuntimeDataModel } from "@prisma/client/runtime/client";
import { makeUser } from "src/modules/user/factories/userFactory";

let validateUserUseCase: ValidateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe("Validar Usuário", () => {

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()
        validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory)
    })

    it("Caso 1: Usuário passa as credênciais corretas", async () => {
        const userPassword = "123456"
        const cryptoPassword = await hash(userPassword, 10)

        const user = makeUser({ password: cryptoPassword })

        userRepositoryInMemory.users = [user]

        const validateUser = await validateUserUseCase.execute({ email: user.email, password: userPassword })

        expect(user).toBe(validateUser)
    }, 10000)

    it("Caso 2: Usuário passou email incorreto", async () => {
        const userPassword = "123456"
        const cryptoPassword = await hash(userPassword, 10)

        const user = makeUser({ password: cryptoPassword })

        userRepositoryInMemory.users = [user]

        await expect(
            validateUserUseCase.execute({ email: "email.errado@gmail.com", password: userPassword })
        ).rejects.toThrow("Email ou senha incorretos🙁")
    }, 10000)

    it("Caso 3: Usuário passou a senha incorreta", async () => {
        const user = makeUser({})

        userRepositoryInMemory.users = [user]

        await expect(
            validateUserUseCase.execute({ email: user.email, password: "senhaErrada" })
        ).rejects.toThrow("Email ou senha incorretos🙁")
    }, 10000)
})
