import { ProductRepositoryInMemory } from "../../repositories/ProductRepositoryInMemory"
import { CreateProductUseCase } from "./createProductUseCase"

let productRepositoryInMemory: ProductRepositoryInMemory
let createProductUseCase: CreateProductUseCase

const BASE_INPUT = {
    name: "Notebook Dell",
    category_product_id: "a6a0a734-d402-4fb3-9d4e-c9f92831bd36",
    seller_user_id: "6c1cc7ef-1f28-4483-bc15-9d4b7109ae31",
    status: true,
}

describe("Criar produto", () => {

    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory()
        createProductUseCase = new CreateProductUseCase(productRepositoryInMemory)
    })

    it("Dado um input válido, quando execute é chamado, então persiste o produto no repositório", async () => {
        expect(productRepositoryInMemory.products).toHaveLength(0)

        const product = await createProductUseCase.execute(BASE_INPUT)

        expect(productRepositoryInMemory.products).toHaveLength(1)
        expect(productRepositoryInMemory.products[0]).toBe(product)
    })

    it("Dado um input válido, quando execute é chamado, então retorna o produto com os campos do input", async () => {
        const product = await createProductUseCase.execute(BASE_INPUT)

        expect(product.name).toBe(BASE_INPUT.name)
        expect(product.seller_user_id).toBe(BASE_INPUT.seller_user_id)
        expect(product.category_product_id).toBe(BASE_INPUT.category_product_id)
        expect(product.status).toBe(BASE_INPUT.status)
    })

    it("Dado status false no input, quando execute é chamado, então o produto é criado com status false", async () => {
        const product = await createProductUseCase.execute({ ...BASE_INPUT, status: false })

        expect(product.status).toBe(false)
    })

    it("Dado um input válido, quando execute é chamado, então o produto recebe um id gerado automaticamente", async () => {
        const product = await createProductUseCase.execute(BASE_INPUT)

        expect(product.id).toBeDefined()
        expect(typeof product.id).toBe("string")
        expect(product.id).toHaveLength(36)
    })

    it("Dado dois inputs distintos, quando execute é chamado duas vezes, então cada produto recebe um id único", async () => {
        const productA = await createProductUseCase.execute({ ...BASE_INPUT, name: "Produto A" })
        const productB = await createProductUseCase.execute({ ...BASE_INPUT, name: "Produto B" })


        console.log("ID do Produto A:", productA.id)
        console.log("ID do Produto B:", productB.id)
        expect(productA.id).not.toBe(productB.id)
        expect(productRepositoryInMemory.products).toHaveLength(2)
    })

    it("Dado um input válido, quando execute é chamado, então createdAt e updatedAt são definidos como datas recentes", async () => {
        const before = Date.now()
        const product = await createProductUseCase.execute(BASE_INPUT)
        const after = Date.now()

        expect(product.createdAt).toBeInstanceOf(Date)
        expect(product.updatedAt).toBeInstanceOf(Date)
        expect(product.createdAt.getTime()).toBeGreaterThanOrEqual(before)
        expect(product.createdAt.getTime()).toBeLessThanOrEqual(after)
        expect(product.updatedAt.getTime()).toBeGreaterThanOrEqual(before)
        expect(product.updatedAt.getTime()).toBeLessThanOrEqual(after)
    })

    it("Dado uma falha no repositório, quando execute é chamado, então o erro é propagado", async () => {
        jest
            .spyOn(productRepositoryInMemory, "create")
            .mockRejectedValueOnce(new Error("Falha ao salvar no repositório"))

        await expect(createProductUseCase.execute(BASE_INPUT)).rejects.toThrow(
            "Falha ao salvar no repositório"
        )
    })
})
