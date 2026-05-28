import { ProductRepositoryInMemory } from "../../repositories/ProductRepositoryInMemory"
import { CreateProductUseCase } from "./createProductUseCase"

let productRepositoryInMemory: ProductRepositoryInMemory
let createProductUseCase: CreateProductUseCase

describe("Criar Produto", () => {

    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory()
        createProductUseCase = new CreateProductUseCase(productRepositoryInMemory)
    })

    it("Conseguir criar um produto", async () => {
        expect(productRepositoryInMemory.products).toEqual([])

        const product = await createProductUseCase.execute({
            "name": "TESTE DE PRODUTO",
            "category_product_id": "a6a0a734-d402-4fb3-9d4e-c9f92831bd36",
            "seller_user_id": "6c1cc7ef-1f28-4483-bc15-9d4b7109ae31",
            "status": true
        })

        expect(productRepositoryInMemory.products).toEqual([product])
    })

    it("", async () => {

    })
})