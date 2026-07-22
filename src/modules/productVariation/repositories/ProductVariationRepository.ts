import { ProductVariation } from "../entities/ProductVariation"

export interface ProductVariationDTO {
    id: string
    title: string
    description: string
    price: number
    quantity: number
    status: boolean
    product_id: string
    discountPercentage: number
    images: { id: string; link: string }[]
    createdAt: Date
    updatedAt: Date
}

export interface IUserUpdateDTO {
    id: string
    title?: string
    email?: string
    status?: boolean
}

export abstract class ProductVariationRepository {
    abstract create(productVariation: ProductVariation): Promise<void>
    abstract findMany(): Promise<ProductVariationDTO[]>
}
