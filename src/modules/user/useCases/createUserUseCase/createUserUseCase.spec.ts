import { compare } from "bcrypt"
import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { CreateUserUseCase } from "./createUserUseCase"
import { EmailAlreadyInUseError } from "src/domain/errors/user/EmailAlreadyInUseError"

let createUserUseCase: CreateUserUseCase
let userRepositoryInMemory: UserRepositoryInMemory
const TEST_PROFILE_ID = "00000000-0000-4000-8000-000000000001"

describe("Criar usuário", () => {

    beforeEach(() => {
        // Declarando qual reposit?rio vamos usar nesse teste
        userRepositoryInMemory = new UserRepositoryInMemory()

        // Declarando o use case que ser? testado e qual reposit?rio ele vai usar
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
    })

    it("Conseguindo criar um usuário", async () => {
        expect(userRepositoryInMemory.users).toEqual([])

        // Chamando o met?do execute da nossa classe createUserUseCase com os dados para cadastrar um usu?rio
        const user = await createUserUseCase.execute({
            email: "lucasbene03@gmail.com",
            profileId: TEST_PROFILE_ID,
            name: "Lucas",
            password: "123456",
            status: true
        })

        // Validando se o reposit?rio em mem?ria cont?m o usu?rio retornado pelo useCase
        expect(userRepositoryInMemory.users).toEqual([user])
    }, 100000)

    it("Validando se a password está sendo criptografada e correta", async () => {
        const userPassword = "123456"

        const user = await createUserUseCase.execute({
            email: "lucasbene03@gmail.com",
            profileId: TEST_PROFILE_ID,
            name: "Lucas",
            password: userPassword,
            status: true
        })

        const validatePassword = await compare(userPassword, user.password)

        expect(user.password).not.toBe(userPassword)
        expect(validatePassword).toBeTruthy()
    }, 10000)

    it("Retorna o usuário com email, nome, status e profileId conforme o input", async () => {
        const input = {
            email: "maria@example.com",
            profileId: TEST_PROFILE_ID,
            name: "Maria",
            password: "secret123",
            status: true
        }

        const user = await createUserUseCase.execute(input)

        expect(user.email).toBe(input.email)
        expect(user.name).toBe(input.name)
        expect(user.status).toBe(input.status)
        expect(user.profileId).toBe(input.profileId)
    }, 10000)

    it("Respeita status false", async () => {
        const user = await createUserUseCase.execute({
            email: "inativo@example.com",
            profileId: TEST_PROFILE_ID,
            name: "Inativo",
            password: "123456",
            status: false
        })

        expect(user.status).toBe(false)
    }, 10000)

    it("Define createdAt e updatedAt como datas recentes", async () => {
        const before = Date.now()

        const user = await createUserUseCase.execute({
            email: "datas@example.com",
            profileId: TEST_PROFILE_ID,
            name: "Datas",
            password: "123456",
            status: true
        })

        const after = Date.now()

        expect(user.createdAt).toBeInstanceOf(Date)
        expect(user.updatedAt).toBeInstanceOf(Date)
        expect(user.createdAt.getTime()).toBeGreaterThanOrEqual(before)
        expect(user.createdAt.getTime()).toBeLessThanOrEqual(after)
        expect(user.updatedAt.getTime()).toBeGreaterThanOrEqual(before)
        expect(user.updatedAt.getTime()).toBeLessThanOrEqual(after)
    }, 10000)

    it("Cria dois usuários distintos com ids diferentes quando os emails são diferentes", async () => {
        const userA = await createUserUseCase.execute({
            email: "a@example.com",
            profileId: TEST_PROFILE_ID,
            name: "A",
            password: "123456",
            status: true
        })

        const userB = await createUserUseCase.execute({
            email: "b@example.com",
            profileId: TEST_PROFILE_ID,
            name: "B",
            password: "123456",
            status: true
        })

        expect(userRepositoryInMemory.users).toHaveLength(2)
        expect(userA.id).not.toBe(userB.id)
    }, 10000)

    it("Não permite criar usuário com email duplicado", async () => {
        const input = {
            email: "duplicado@example.com",
            profileId: TEST_PROFILE_ID,
            name: "Duplicado",
            password: "123456",
            status: true
        }

        await createUserUseCase.execute(input)

        await expect(createUserUseCase.execute(input)).rejects.toBeInstanceOf(EmailAlreadyInUseError)
    }, 10000)

})