import { ForbiddenException } from "@nestjs/common"
import { makeUser } from "../../factories/userFactory"
import { UserAuthorizationPolicyImpl } from "../../policies/user-authorization.policy"
import { UserRepositoryInMemory } from "../../repositories/UserRepositoryInMemory"
import { UpdateUserUseCase } from "./updateUserUseCase"

const TEST_PROFILE_ID = "00000000-0000-4000-8000-000000000001"

describe("UpdateUserUseCase", () => {
    let userRepositoryInMemory: UserRepositoryInMemory
    let updateUserUseCase: UpdateUserUseCase
    let envAdminBackup: string | undefined

    beforeEach(() => {
        envAdminBackup = process.env.ADMIN_PROFILE_ID
        delete process.env.ADMIN_PROFILE_ID

        userRepositoryInMemory = new UserRepositoryInMemory()
        updateUserUseCase = new UpdateUserUseCase(
            userRepositoryInMemory,
            new UserAuthorizationPolicyImpl(),
        )
    })

    afterEach(() => {
        if (envAdminBackup === undefined) {
            delete process.env.ADMIN_PROFILE_ID
        } else {
            process.env.ADMIN_PROFILE_ID = envAdminBackup
        }
    })

    it("Caso 1: Atualizar um usuário com sucesso", async () => {
        const user = makeUser({})

        userRepositoryInMemory.users = [user]

        await updateUserUseCase.execute({
            actor: { id: user.id, profileId: user.profileId },
            id: user.id,
            name: "John Doe",
            email: "john.doe@example.com",
        })

        expect(userRepositoryInMemory.users).toHaveLength(1)
        expect(userRepositoryInMemory.users[0].name).toBe("John Doe")
        expect(userRepositoryInMemory.users[0].email).toBe("john.doe@example.com")
    })

    it("Lança ForbiddenException quando o ator não é o usuário alvo nem administrador", async () => {
        const user = makeUser({})
        userRepositoryInMemory.users = [user]

        const outroAtor = {
            id: "99999999-9999-4999-8999-999999999999",
            profileId: "11111111-1111-4111-8111-111111111111",
        }

        await expect(
            updateUserUseCase.execute({
                actor: outroAtor,
                id: user.id,
                name: "Nome não autorizado",
            }),
        ).rejects.toBeInstanceOf(ForbiddenException)
    })

    it("Permite que administrador atualize outro usuário", async () => {
        process.env.ADMIN_PROFILE_ID = TEST_PROFILE_ID

        const alvo = makeUser({ email: "alvo@test.com" })
        const adminActor = {
            id: "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa",
            profileId: TEST_PROFILE_ID,
        }

        userRepositoryInMemory.users = [alvo]

        await updateUserUseCase.execute({
            actor: adminActor,
            id: alvo.id,
            name: "Atualizado por admin",
        })

        expect(alvo.name).toBe("Atualizado por admin")
    })

    it("Propaga erro quando o id existe como ator mas não há usuário no repositório", async () => {
        const idInexistente = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb"

        await expect(
            updateUserUseCase.execute({
                actor: { id: idInexistente, profileId: TEST_PROFILE_ID },
                id: idInexistente,
                name: "Sem cadastro",
            }),
        ).rejects.toThrow("User not found")
    })

    it("Atualiza apenas o nome mantendo email e demais campos", async () => {
        const user = makeUser({
            name: "Nome original",
            email: "email-fixo@test.com",
        })
        userRepositoryInMemory.users = [user]

        await updateUserUseCase.execute({
            actor: { id: user.id, profileId: user.profileId },
            id: user.id,
            name: "Só nome alterado",
        })

        expect(user.name).toBe("Só nome alterado")
        expect(user.email).toBe("email-fixo@test.com")
    })

    it("Atualiza apenas o email mantendo o nome", async () => {
        const user = makeUser({
            name: "Nome estável",
            email: "antigo@test.com",
        })
        userRepositoryInMemory.users = [user]

        await updateUserUseCase.execute({
            actor: { id: user.id, profileId: user.profileId },
            id: user.id,
            email: "novo@test.com",
        })

        expect(user.name).toBe("Nome estável")
        expect(user.email).toBe("novo@test.com")
    })

    it("Atualiza status de inativo para ativo", async () => {
        const user = makeUser({ status: false })
        userRepositoryInMemory.users = [user]

        await updateUserUseCase.execute({
            actor: { id: user.id, profileId: user.profileId },
            id: user.id,
            status: true,
        })

        expect(user.status).toBe(true)
    })
})
