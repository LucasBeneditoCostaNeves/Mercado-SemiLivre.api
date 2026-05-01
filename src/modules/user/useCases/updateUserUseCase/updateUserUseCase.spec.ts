import { makeUser } from "../../factories/userFactory"
import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"


describe("UpdateUserUseCase", () => {

    let userRepositoryInMemory: UserRepositoryInMemory
    beforeEach(() => {
        // Declarando qual reposit?rio vamos usar nesse teste
        userRepositoryInMemory = new UserRepositoryInMemory()
    })


    it("Caso 1: Atualizar um usuário com sucesso", async () => {
        const user = makeUser({})

        userRepositoryInMemory.users = [user]

        await userRepositoryInMemory.update({
            id: user.id,
            name: "John Doe",
            email: "john.doe@example.com"
        })

        expect(userRepositoryInMemory.users).toHaveLength(1)
        expect(userRepositoryInMemory.users[0].name).toBe("John Doe")
        expect(userRepositoryInMemory.users[0].email).toBe("john.doe@example.com")
    })
})