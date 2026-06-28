import { ProductVariation } from "../entities/ProductVariation"

export interface ProductVariationDTO {
    id: string
    name: string
    description: string
    price: number
    quantity: number
    status: boolean
    product_id: string
    createdAt: Date
    updatedAt: Date
}

export interface IUserUpdateDTO {
    id: string
    name?: string
    email?: string
    status?: boolean
}


export abstract class ProductVariationRepository {
    abstract create(productVariation: ProductVariation): Promise<void>
    abstract findMany(): Promise<ProductVariationDTO[]>
    // abstract update(user: IUserUpdateDTO): Promise<void>
    // abstract exisByEmail(email: string): Promise<boolean>
}