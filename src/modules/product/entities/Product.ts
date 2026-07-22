import { randomUUID } from "crypto"
import { Replace } from "../../../utils/replace"

interface IProductSchema {
    title: string
    seller_user_id: string
    category_product_id: string
    brand_id: string
    thumbnail: string
    warrantyInformation: string
    status: boolean
    createdAt: Date
    updatedAt: Date
}

export class Product {
    private props: IProductSchema
    private _id: string

    constructor(props: Replace<IProductSchema, { createdAt?: Date, updatedAt?: Date }>, id?: string) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date()
        }
        this._id = id || randomUUID()
    }

    get id(): string {
        return this._id
    }

    get title(): string {
        return this.props.title
    }

    set title(title: string) {
        this.props.title = title
    }

    get status(): boolean {
        return this.props.status
    }

    set status(status: boolean) {
        this.props.status = status
    }

    get category_product_id(): string {
        return this.props.category_product_id
    }

    set category_product_id(category_product_id: string) {
        this.props.category_product_id = category_product_id
    }

    get seller_user_id(): string {
        return this.props.seller_user_id
    }

    set seller_user_id(seller_user_id: string) {
        this.props.seller_user_id = seller_user_id
    }

    get brand_id(): string {
        return this.props.brand_id
    }

    set brand_id(brand_id: string) {
        this.props.brand_id = brand_id
    }

    get thumbnail(): string {
        return this.props.thumbnail
    }

    set thumbnail(thumbnail: string) {
        this.props.thumbnail = thumbnail
    }

    get warrantyInformation(): string {
        return this.props.warrantyInformation
    }

    set warrantyInformation(warrantyInformation: string) {
        this.props.warrantyInformation = warrantyInformation
    }

    get createdAt(): Date {
        return this.props.createdAt
    }

    get updatedAt(): Date {
        return this.props.updatedAt
    }
}
