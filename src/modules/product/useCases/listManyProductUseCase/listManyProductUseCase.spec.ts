import { Product } from "../../entities/Product"
import { ProductRepositoryInMemory } from "../../repositories/ProductRepositoryInMemory"
import { ListManyProductUseCase } from "./listManyProductUseCase"

let productRepositoryInMemory: ProductRepositoryInMemory
let listManyProductUseCase: ListManyProductUseCase

const makeProduct = (overrides?: Partial<ConstructorParameters<typeof Product>[0]>) =>
    new Product({
        name: "Notebook Dell",
        category_product_id: "a6a0a734-d402-4fb3-9d4e-c9f92831bd36",
        seller_user_id: "6c1cc7ef-1f28-4483-bc15-9d4b7109ae31",
        status: true,
        ...overrides,
    })

describe("Listar produtos", () => {

    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory()
        listManyProductUseCase = new ListManyProductUseCase(productRepositoryInMemory)
    })

    it("Dado um repositório vazio, quando execute é chamado, então retorna uma lista vazia", async () => {
        const result = await listManyProductUseCase.execute({})

        expect(result).toEqual([])
    })

    it("Dado um repositório com um produto, quando execute é chamado, então retorna lista com esse produto", async () => {
        const product = makeProduct()
        await productRepositoryInMemory.create(product)

        const result = await listManyProductUseCase.execute({})

        expect(result).toHaveLength(1)
        expect(result[0]).toBe(product)
    })

    it("Dado um repositório com múltiplos produtos, quando execute é chamado, então retorna todos os produtos", async () => {
        const productA = makeProduct({ name: "Produto A" })
        const productB = makeProduct({ name: "Produto B" })
        const productC = makeProduct({ name: "Produto C" })

        await productRepositoryInMemory.create(productA)
        await productRepositoryInMemory.create(productB)
        await productRepositoryInMemory.create(productC)

        const result = await listManyProductUseCase.execute({})

        expect(result).toHaveLength(3)
    })

    it("Dado uma falha no repositório, quando execute é chamado, então o erro é propagado", async () => {
        jest
            .spyOn(productRepositoryInMemory, "findMany")
            .mockRejectedValueOnce(new Error("Falha ao buscar produtos"))

        await expect(listManyProductUseCase.execute({})).rejects.toThrow(
            "Falha ao buscar produtos"
        )
    })
})
