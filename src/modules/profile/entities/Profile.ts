import { randomUUID } from "crypto"
import { Replace } from "../../../utils/replace"

interface ProfileSchema {
    name: string,
    createdAt: Date,
    updatedAt: Date,
}

export class Profile {
    private props: ProfileSchema
    private _id: string

    constructor(props: Replace<ProfileSchema, { createdAt?: Date, updatedAt?: Date }>, id?: string) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date()
        }
        this._id = id || randomUUID()
    }

    get id(): string {
        return this.id
    }

    get name(): string {
        return this.props.name
    }

    set name(name) {
        this.props.name = name
    }

    get createdAt(): Date {
        return this.props.createdAt
    }

    get updatedAt(): Date {
        return this.props.updatedAt
    }
}