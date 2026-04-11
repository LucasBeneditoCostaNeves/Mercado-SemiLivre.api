
import { Profile } from 'src/modules/profile/entities/Profile'
import { Profile as ProfileRaw } from "@prisma/client"

export class PrismaProfileMapper {

    static toPrisma({ id, name, createdAt, updatedAt }: Profile): ProfileRaw {
        return {
            id,
            name,
            createdAt,
            updatedAt,
        }
    }

    static toDomain({ id, ...profileData }: ProfileRaw): Profile {
        return new Profile(
            {
                ...profileData,
            },
            id
        )
    }
}