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

        //aqui quero passar um array
        userRepositoryInMemory.users = [newUser]

        const users = await listUserCase.execute({})

        expect([newUser]).toStrictEqual(users)
    })
})