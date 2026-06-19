import { randomUUID } from 'crypto'
import { Replace } from '../../../utils/replace'

interface AddressSchema {
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement?: string | null
    isDefault: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
}

export class Address {
    private props: AddressSchema
    private _id: string

    constructor(
        props: Replace<AddressSchema, { createdAt?: Date; updatedAt?: Date; isDefault?: boolean }>,
        id?: string,
    ) {
        this.props = {
            ...props,
            isDefault: props.isDefault ?? false,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        }
        this._id = id ?? randomUUID()
    }

    get id(): string {
        return this._id
    }

    get cep(): string {
        return this.props.cep
    }

    set cep(cep: string) {
        this.props.cep = cep
    }

    get state(): string {
        return this.props.state
    }

    set state(state: string) {
        this.props.state = state
    }

    get city(): string {
        return this.props.city
    }

    set city(city: string) {
        this.props.city = city
    }

    get street(): string {
        return this.props.street
    }

    set street(street: string) {
        this.props.street = street
    }

    get number(): string {
        return this.props.number
    }

    set number(value: string) {
        this.props.number = value
    }

    get complement(): string | null | undefined {
        return this.props.complement
    }

    set complement(complement: string | null | undefined) {
        this.props.complement = complement
    }

    get isDefault(): boolean {
        return this.props.isDefault
    }

    set isDefault(isDefault: boolean) {
        this.props.isDefault = isDefault
    }

    get userId(): string {
        return this.props.userId
    }

    get createdAt(): Date {
        return this.props.createdAt
    }

    get updatedAt(): Date {
        return this.props.updatedAt
    }
}
