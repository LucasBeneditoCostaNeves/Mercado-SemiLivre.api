import { Product } from "../entities/Product";
import { IProductFilter, ProductRepository } from "./ProductRepository";

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

    async delete(id: string): Promise<void> {
        this.products = this.products.filter(p => p.id !== id)
    }

    async findMany(filter?: IProductFilter): Promise<Product[]> {
        if (filter?.sellerUserId) {
            return this.products.filter(p => p.seller_user_id === filter.sellerUserId)
        }
        return this.products
    }

    async findById(id: string): Promise<Product | null> {
        return this.products.find(p => p.id === id) || null
    }
}