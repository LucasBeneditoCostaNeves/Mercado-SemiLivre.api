import { Profile } from "../../entities/Profile"
import { ProfileRepositoryInMemory } from "../../repositories/ProfileRepositoryInMemory"
import { ListManyProfileUseCase } from "./listManyProfileUseCase"

let profileRepositoryInMemory: ProfileRepositoryInMemory
let listManyProfileUseCase: ListManyProfileUseCase

const makeProfile = (overrides?: Partial<ConstructorParameters<typeof Profile>[0]>) =>
    new Profile({
        name: "Administrador",
        ...overrides,
    })

describe("Listar perfis", () => {

    beforeEach(() => {
        profileRepositoryInMemory = new ProfileRepositoryInMemory()
        listManyProfileUseCase = new ListManyProfileUseCase(profileRepositoryInMemory)
    })

    it("Dado um repositório vazio, quando execute é chamado, então retorna uma lista vazia", async () => {
        const result = await listManyProfileUseCase.execute({})

        expect(result).toEqual([])
    })

    it("Dado um repositório com um perfil, quando execute é chamado, então retorna lista com esse perfil", async () => {
        const profile = makeProfile()
        await profileRepositoryInMemory.create(profile)

        const result = await listManyProfileUseCase.execute({})

        expect(result).toHaveLength(1)
        expect(result[0]).toBe(profile)
    })

    it("Dado um repositório com múltiplos perfis, quando execute é chamado, então retorna todos os perfis", async () => {
        await profileRepositoryInMemory.create(makeProfile({ name: "Administrador" }))
        await profileRepositoryInMemory.create(makeProfile({ name: "Vendedor" }))
        await profileRepositoryInMemory.create(makeProfile({ name: "Comprador" }))

        const result = await listManyProfileUseCase.execute({})

        expect(result).toHaveLength(3)
    })

    it("Dado uma falha no repositório, quando execute é chamado, então o erro é propagado", async () => {
        jest
            .spyOn(profileRepositoryInMemory, "listMany")
            .mockRejectedValueOnce(new Error("Falha ao buscar perfis"))

        await expect(listManyProfileUseCase.execute({})).rejects.toThrow(
            "Falha ao buscar perfis"
        )
    })
})
