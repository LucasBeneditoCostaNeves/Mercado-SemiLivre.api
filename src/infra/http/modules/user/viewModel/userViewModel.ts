import { User } from "@prisma/client";

export class userViewModel {
    static toHttp({ id, name, email, status, createdAt, updatedAt }: User) {
        return {
            id,
            name,
            email,
            status,
            createdAt,
            updatedAt
        }
    }
}