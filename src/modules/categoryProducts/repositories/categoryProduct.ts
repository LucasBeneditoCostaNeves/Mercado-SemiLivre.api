import { CategoryProduct } from "../entities/categoryProducts"

export interface ICategoryProductDTO {
    id: string
    name: string
    status: boolean
    createdAt: Date
    updatedAt: Date
}

export abstract class CategoryProductRepository {
    abstract create(categoryProduct: CategoryProduct): Promise<void>
    abstract listMany(): Promise<ICategoryProductDTO[]>
}