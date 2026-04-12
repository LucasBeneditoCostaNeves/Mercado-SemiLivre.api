import { CategoryProducts } from "@prisma/client"

export class categoryProductViewModel {
    static toHttp({ id, name, status, createdAt, updatedAt }: CategoryProducts) {
        return {
            id,
            name,
            status,
            createdAt,
            updatedAt
        }
    }
}