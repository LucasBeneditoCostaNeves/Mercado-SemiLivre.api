import { Product } from "../entities/Product"

export interface IProductDTO {
    id: string
    title: string
    status: boolean
    category_product_id: string
    seller_user_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    createdAt: Date
    updatedAt: Date
}

export interface IProductUpdateDTO {
    id: string,
    title?: string,
    status?: boolean,
    thumbnail?: string,
}

export interface IProductFilter {
    sellerUserId?: string
}

export abstract class ProductRepository {
    abstract create(product: Product): Promise<void>
    abstract findMany(filter?: IProductFilter): Promise<IProductDTO[]>
    abstract update(dataProduct: IProductUpdateDTO): Promise<void>
    abstract delete(id: string): Promise<void>
    abstract findById(id: string): Promise<Product | null>
}
