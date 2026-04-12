import { CategoryProduct } from "../entities/categoryProducts";

export abstract class CategoryProductRepository {
    abstract create(categoryProduct: CategoryProduct)
}