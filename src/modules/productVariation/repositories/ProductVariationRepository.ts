import { ProductVariation } from "../entities/ProductVariation"

export interface IUserDTO {
    id: string
    name: string
    email: string
    password: string
    status: boolean
    profileId: string
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
    // abstract findByEmail(email: string): Promise<User | null>
    // abstract findMany(): Promise<IUserDTO[]>
    // abstract update(user: IUserUpdateDTO): Promise<void>
    // abstract exisByEmail(email: string): Promise<boolean>
}