import { CategoryProduct } from "../../entities/categoryProducts"
import { CategoryProductRepositoryInMemory } from "../../repositories/CategoryProductRepositoryInMemory"
import { ListCategoryProductUseCase } from "./listCategoryProductUseCase"

let categoryProductRepositoryInMemory: CategoryProductRepositoryInMemory
let listCategoryProductUseCase: ListCategoryProductUseCase

const makeCategory = (overrides?: Partial<ConstructorParameters<typeof CategoryProduct>[0]>) =>
    new CategoryProduct({
        name: "Eletrônicos",
        status: true,
        ...overrides,
    })

describe("Listar categorias de produto", () => {

    beforeEach(() => {
        categoryProductRepositoryInMemory = new CategoryProductRepositoryInMemory()
        listCategoryProductUseCase = new ListCategoryProductUseCase(categoryProductRepositoryInMemory)
    })

    it("Dado um repositório vazio, quando execute é chamado, então retorna uma lista vazia", async () => {
        const result = await listCategoryProductUseCase.execute()

        expect(result).toEqual([])
    })

    it("Dado um repositório com uma categoria, quando execute é chamado, então retorna lista com essa categoria", async () => {
        const category = makeCategory()
        await categoryProductRepositoryInMemory.create(category)

        const result = await listCategoryProductUseCase.execute()

        expect(result).toHaveLength(1)
        expect(result[0]).toBe(category)
    })

    it("Dado um repositório com múltiplas categorias, quando execute é chamado, então retorna todas as categorias", async () => {
        await categoryProductRepositoryInMemory.create(makeCategory({ name: "Eletrônicos" }))
        await categoryProductRepositoryInMemory.create(makeCategory({ name: "Roupas" }))
        await categoryProductRepositoryInMemory.create(makeCategory({ name: "Alimentos" }))

        const result = await listCategoryProductUseCase.execute()

        expect(result).toHaveLength(3)
    })

    it("Dado uma falha no repositório, quando execute é chamado, então o erro é propagado", async () => {
        jest
            .spyOn(categoryProductRepositoryInMemory, "listMany")
            .mockRejectedValueOnce(new Error("Falha ao buscar categorias"))

        await expect(listCategoryProductUseCase.execute()).rejects.toThrow(
            "Falha ao buscar categorias"
        )
    })
})
