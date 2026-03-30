import { randomUUID } from "crypto";
import { Replace } from "src/utils/replace";

interface UserSchema {
    name: string,
    email: string,
    password: string,
    status: boolean
    createdAt: Date,
    updatedAt: Date,
}

export class User {
    private props: UserSchema;
    private _id: string;

    /*  
        Usando Replace aqui pq caso for usado user para criar um usuário novo não vai ser passado o 
        createdAt e o updatedAt, então estamos falando que caso não seja passado será um new Date()
    */

    constructor(props: Replace<UserSchema, { createdAt?: Date, updatedAt?: Date }>, id?: string) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date()
        }
        this._id = id || randomUUID();
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

    get email(): string {
        return this.props.email
    }

    set email(email: string) {
        this.props.email = email
    }

    get password(): string {
        return this.props.password
    }

    set password(password: string) {
        this.props.password = password
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
        return this.props.createdAt
    }
}