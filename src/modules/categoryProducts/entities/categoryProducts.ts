import { randomUUID } from "crypto"
import { Replace } from "../../../utils/replace"

interface ICategoryProductSchema {
    name: string,
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
}

export class CategoryProduct {
    private props: ICategoryProductSchema
    private _id: string

    /*  
        Usando Replace aqui pq caso for usado user para criar um usuário novo não vai ser passado o 
        createdAt e o updatedAt, então estamos falando que caso não seja passado será um new Date()
    */

    constructor(props: Replace<ICategoryProductSchema, { createdAt?: Date, updatedAt?: Date }>, id?: string) {
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

    get name(): string {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
    }

    get status(): boolean {
        return this.props.status
    }

    set status(status: boolean) {
        this.props.status = status
    }

    get createdAt(): Date {
        return this.props.createdAt
    }

    get updatedAt(): Date {
        return this.props.updatedAt
    }
}