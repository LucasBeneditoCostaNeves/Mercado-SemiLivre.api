import { randomUUID } from 'crypto'
import { Replace } from '../../../utils/replace'

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
    PREFER_NOT_TO_SAY = 'PREFER_NOT_TO_SAY',
}

interface PersonalDataSchema {
    cpf: string
    birthDate: Date
    phone: string
    gender: Gender
    userId: string
    createdAt: Date
    updatedAt: Date
}

export class PersonalData {
    private props: PersonalDataSchema
    private _id: string

    constructor(
        props: Replace<PersonalDataSchema, { createdAt?: Date; updatedAt?: Date }>,
        id?: string,
    ) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        }
        this._id = id ?? randomUUID()
    }

    get id(): string {
        return this._id
    }

    get cpf(): string {
        return this.props.cpf
    }

    set cpf(cpf: string) {
        this.props.cpf = cpf
    }

    get birthDate(): Date {
        return this.props.birthDate
    }

    set birthDate(birthDate: Date) {
        this.props.birthDate = birthDate
    }

    get phone(): string {
        return this.props.phone
    }

    set phone(phone: string) {
        this.props.phone = phone
    }

    get gender(): Gender {
        return this.props.gender
    }

    set gender(gender: Gender) {
        this.props.gender = gender
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
