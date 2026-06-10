import { ProfileRepositoryInMemory } from "../../repositories/ProfileRepositoryInMemory"
import { CreateProfileUseCase } from "./createProfileUseCase"

let profileRepositoryInMemory: ProfileRepositoryInMemory
let createProfileUseCase: CreateProfileUseCase

const BASE_INPUT = {
    name: "Administrador",
}

describe("Criar perfil", () => {

    beforeEach(() => {
        profileRepositoryInMemory = new ProfileRepositoryInMemory()
        createProfileUseCase = new CreateProfileUseCase(profileRepositoryInMemory)
    })

    it("Dado um input válido, quando execute é chamado, então persiste o perfil no repositório", async () => {
        expect(profileRepositoryInMemory.profiles).toHaveLength(0)

        const profile = await createProfileUseCase.execute(BASE_INPUT)

        expect(profileRepositoryInMemory.profiles).toHaveLength(1)
        expect(profileRepositoryInMemory.profiles[0]).toBe(profile)
    })

    it("Dado um input válido, quando execute é chamado, então retorna o perfil com o nome do input", async () => {
        const profile = await createProfileUseCase.execute(BASE_INPUT)

        expect(profile.name).toBe(BASE_INPUT.name)
    })

    it("Dado um input válido, quando execute é chamado, então o perfil recebe um id gerado automaticamente", async () => {
        const profile = await createProfileUseCase.execute(BASE_INPUT)

        expect(profile.id).toBeDefined()
        expect(typeof profile.id).toBe("string")
        expect(profile.id).toHaveLength(36)
    })

    it("Dado dois inputs distintos, quando execute é chamado duas vezes, então cada perfil recebe um id único", async () => {
        const profileA = await createProfileUseCase.execute({ name: "Administrador" })
        const profileB = await createProfileUseCase.execute({ name: "Vendedor" })

        expect(profileA.id).not.toBe(profileB.id)
        expect(profileRepositoryInMemory.profiles).toHaveLength(2)
    })

    it("Dado um input válido, quando execute é chamado, então createdAt e updatedAt são definidos como datas recentes", async () => {
        const before = Date.now()
        const profile = await createProfileUseCase.execute(BASE_INPUT)
        const after = Date.now()

        expect(profile.createdAt).toBeInstanceOf(Date)
        expect(profile.updatedAt).toBeInstanceOf(Date)
        expect(profile.createdAt.getTime()).toBeGreaterThanOrEqual(before)
        expect(profile.createdAt.getTime()).toBeLessThanOrEqual(after)
        expect(profile.updatedAt.getTime()).toBeGreaterThanOrEqual(before)
        expect(profile.updatedAt.getTime()).toBeLessThanOrEqual(after)
    })

    it("Dado uma falha no repositório, quando execute é chamado, então o erro é propagado", async () => {
        jest
            .spyOn(profileRepositoryInMemory, "create")
            .mockRejectedValueOnce(new Error("Falha ao salvar no repositório"))

        await expect(createProfileUseCase.execute(BASE_INPUT)).rejects.toThrow(
            "Falha ao salvar no repositório"
        )
    })
})
