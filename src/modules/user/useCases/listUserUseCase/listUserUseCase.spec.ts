import { makeUser } from "../../factories/userFactory"
import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { ListUserCase } from "./listUserUseCase"

let listUserCase: ListUserCase
let userRepositoryInMemory: UserRepositoryInMemory

describe("Listar Usuários", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory()

        listUserCase = new ListUserCase(userRepositoryInMemory)
    })

    it("Listando os usuários corretamente", async () => {
        const newUser = makeUser({})

        userRepositoryInMemory.users = [newUser]

        const users = await listUserCase.execute({})

        expect([newUser]).toStrictEqual(users)
    })

    it("Retorna lista vazia quando não há usuários cadastrados", async () => {
        userRepositoryInMemory.users = []

        const users = await listUserCase.execute({})

        expect(users).toEqual([])
        expect(users).toHaveLength(0)
    })

    it("Lista vários usuários na mesma ordem em que estão no repositório", async () => {
        const first = makeUser({ email: "primeiro@test.com" })
        const second = makeUser({ email: "segundo@test.com" })
        const third = makeUser({ email: "terceiro@test.com" })

        userRepositoryInMemory.users = [first, second, third]

        const users = await listUserCase.execute({})

        expect(users).toStrictEqual([first, second, third])
    })

    it("Inclui usuários inativos na listagem (não filtra por status)", async () => {
        const activeUser = makeUser({ email: "ativo@test.com", status: true })
        const inactiveUser = makeUser({ email: "inativo@test.com", status: false })

        userRepositoryInMemory.users = [activeUser, inactiveUser]

        const users = await listUserCase.execute({})

        expect(users).toHaveLength(2)
        expect(users).toStrictEqual([activeUser, inactiveUser])
    })
})