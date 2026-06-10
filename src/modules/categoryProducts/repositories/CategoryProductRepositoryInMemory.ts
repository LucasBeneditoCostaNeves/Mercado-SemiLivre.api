import { CategoryProduct } from "../entities/categoryProducts"
import { CategoryProductRepository } from "./categoryProduct"

export class CategoryProductRepositoryInMemory implements CategoryProductRepository {
    public categories: CategoryProduct[] = []

    async create(categoryProduct: CategoryProduct): Promise<void> {
        this.categories.push(categoryProduct)
    }

    async listMany(): Promise<CategoryProduct[]> {
        return this.categories
    }
}
