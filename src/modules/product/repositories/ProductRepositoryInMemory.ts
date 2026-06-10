import { Product } from "../entities/Product";
import { ProductRepository } from "./ProductRepository";

export class ProductRepositoryInMemory implements ProductRepository {
    public products: Product[] = []

    async create(product: Product): Promise<void> {
        this.products.push(product)
    }

    async update(product: Product): Promise<void> {
        const index = this.products.findIndex(p => p.id === product.id)
        if (index !== -1) {
            this.products[index] = product
        }
    }

    async findMany(): Promise<Product[]> {
        return this.products
    }

    async findById(id: string): Promise<Product | null> {
        return this.products.find(p => p.id === id) || null
    }
}