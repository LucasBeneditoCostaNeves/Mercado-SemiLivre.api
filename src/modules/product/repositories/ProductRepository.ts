import { Injectable } from "@nestjs/common"
import { Product } from "../entities/Product"

export interface IProductDTO {
    id: string
    name: string
    status: boolean
    category_product_id: string
    seller_user_id: string
    createdAt: Date
    updatedAt: Date
}

export interface IProductUpdateDTO {
    id: string,
    name?: string,
    status?: boolean
}

@Injectable()
export abstract class ProductRepository {
    abstract create(product: Product): Promise<void>
    abstract listMany(): Promise<IProductDTO[] | null>
    abstract updateProduct(dataProduct: IProductUpdateDTO): Promise<void>
}