import { randomUUID } from "node:crypto"
import { Replace } from "src/utils/replace"

interface ProductVariationSchema {
    name: string,
    price: number,
    quantity: number,
    description: string,
    product_id: string,
    status?: boolean,
    createdAt: Date,
    updatedAt: Date
}

export class ProductVariation {
    private _id: string
    private props: ProductVariationSchema

    constructor(props: Replace<ProductVariationSchema, { createdAt?: Date, updatedAt?: Date }>, id?: string) {
        this.props = {
            ...props,
            status: props.status || true,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date()
        }
        this._id = id || randomUUID()
    }

    get id(): string {
        return this._id
    }

    get name(): string {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
    }

    get price(): number {
        return this.props.price
    }

    set price(price: number) {
        this.props.price = price
    }

    get quantity(): number {
        return this.props.quantity
    }

    set quantity(quantity: number) {
        this.props.quantity = quantity
    }

    get description(): string {
        return this.props.description
    }

    set description(description: string) {
        this.props.description = description
    }

    get product_id(): string {
        return this.props.product_id
    }

    set product_id(product_id: string) {
        this.props.product_id = product_id
    }

    get status(): boolean | undefined {
        return this.props.status
    }

    set status(status: boolean) {
        this.props.status = status ? status : true
    }

    get createdAt(): Date {
        return this.props.createdAt
    }

    get updatedAt(): Date {
        return this.props.updatedAt
    }
}
