import { compare, hash } from "bcrypt"
import { UserRepositoryInMemory } from "../../reposiories/UserRepositoryInMemory"
import { CreateUserUseCase } from "./createUserUseCase"

let createUserUseCase: CreateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory

describe("Criar usuário", () => {

    beforeEach(() => {
        // Declarando qual repositório vamos usar nesse teste
        userRepositoryInMemory = new UserRepositoryInMemory();

        // Declarando o use case que será testado e qual repositório ele vai usar
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
    })

    it("Conseguindo criar um usuário", async () => {
        expect(userRepositoryInMemory.users).toEqual([])

        // Chamando o metódo execute da nossa classe createUserUseCase com os dados para cadastrar um usuário
        const user = await createUserUseCase.execute({
            email: "lucasbene03@gmail.com",
            name: "Lucas",
            password: "123456",
            status: true
        })

        // Validando se o repositório em memória contém o usuário retornado pelo useCase
        expect(userRepositoryInMemory.users).toEqual([user])
    }, 10000)

    it("Validando se a password está sendo criptografada", async () => {
        const userPassword = "123456"

        const user = await createUserUseCase.execute({
            email: "lucasbene03@gmail.com",
            name: "Lucas",
            password: userPassword,
            status: true
        })

        const validatePassword = await compare(userPassword, user.password)

        expect(validatePassword).toBeTruthy()
    }, 10000)
})