import { CategoryProductRepositoryInMemory } from "../../repositories/CategoryProductRepositoryInMemory"
import { CreateCategoryProductUseCase } from "./createCategoryProductUseCase"

let categoryProductRepositoryInMemory: CategoryProductRepositoryInMemory
let createCategoryProductUseCase: CreateCategoryProductUseCase

const BASE_INPUT = {
    name: "Eletrônicos",
    status: true,
}

describe("Criar categoria de produto", () => {

    beforeEach(() => {
        categoryProductRepositoryInMemory = new CategoryProductRepositoryInMemory()
        createCategoryProductUseCase = new CreateCategoryProductUseCase(categoryProductRepositoryInMemory)
    })

    it("Dado um input válido, quando execute é chamado, então persiste a categoria no repositório", () => {
        expect(categoryProductRepositoryInMemory.categories).toHaveLength(0)

        const category = createCategoryProductUseCase.execute(BASE_INPUT)

        expect(categoryProductRepositoryInMemory.categories).toHaveLength(1)
        expect(categoryProductRepositoryInMemory.categories[0]).toBe(category)
    })

    it("Dado um input válido, quando execute é chamado, então retorna a categoria com os campos do input", () => {
        const category = createCategoryProductUseCase.execute(BASE_INPUT)

        expect(category.name).toBe(BASE_INPUT.name)
        expect(category.status).toBe(BASE_INPUT.status)
    })

    it("Dado status false no input, quando execute é chamado, então a categoria é criada com status false", () => {
        const category = createCategoryProductUseCase.execute({ ...BASE_INPUT, status: false })

        expect(category.status).toBe(false)
    })

    it("Dado um input válido, quando execute é chamado, então a categoria recebe um id gerado automaticamente", () => {
        const category = createCategoryProductUseCase.execute(BASE_INPUT)

        expect(category.id).toBeDefined()
        expect(typeof category.id).toBe("string")
        expect(category.id).toHaveLength(36)
    })

    it("Dado dois inputs distintos, quando execute é chamado duas vezes, então cada categoria recebe um id único", () => {
        const categoryA = createCategoryProductUseCase.execute({ ...BASE_INPUT, name: "Eletrônicos" })
        const categoryB = createCategoryProductUseCase.execute({ ...BASE_INPUT, name: "Roupas" })

        expect(categoryA.id).not.toBe(categoryB.id)
        expect(categoryProductRepositoryInMemory.categories).toHaveLength(2)
    })

    it("Dado um input válido, quando execute é chamado, então createdAt e updatedAt são definidos como datas recentes", () => {
        const before = Date.now()
        const category = createCategoryProductUseCase.execute(BASE_INPUT)
        const after = Date.now()

        expect(category.createdAt).toBeInstanceOf(Date)
        expect(category.updatedAt).toBeInstanceOf(Date)
        expect(category.createdAt.getTime()).toBeGreaterThanOrEqual(before)
        expect(category.createdAt.getTime()).toBeLessThanOrEqual(after)
        expect(category.updatedAt.getTime()).toBeGreaterThanOrEqual(before)
        expect(category.updatedAt.getTime()).toBeLessThanOrEqual(after)
    })
})

/*
  Cenário não coberto:
  - "Falha no repositório → erro propagado": execute() não é async e não faz await em create(),
    portanto erros do repositório tornam-se unhandled promise rejections e não chegam ao chamador.
    Para cobrir esse cenário seria necessário tornar execute() async e adicionar await.
*/
