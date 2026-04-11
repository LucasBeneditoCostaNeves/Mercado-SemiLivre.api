import { Profile } from "@prisma/client"

export class ProfileViewModel {
    static toHttp({ id, name, createdAt, updatedAt }: Profile) {
        return {
            id,
            name,
            createdAt,
            updatedAt
        }
    }
}