import { PersonalData, Gender } from 'src/modules/personalData/entities/PersonalData'
import { PersonalData as PersonalDataRaw } from '@prisma/client'

export class PrismaPersonalDataMapper {
    static toPrisma({ id, cpf, birthDate, phone, gender, userId, createdAt, updatedAt }: PersonalData): PersonalDataRaw {
        return { id, cpf, birthDate, phone, gender, userId, createdAt, updatedAt }
    }

    static toDomain({ id, ...raw }: PersonalDataRaw): PersonalData {
        return new PersonalData(
            {
                cpf: raw.cpf,
                birthDate: raw.birthDate,
                phone: raw.phone,
                gender: raw.gender as Gender,
                userId: raw.userId,
                createdAt: raw.createdAt,
                updatedAt: raw.updatedAt,
            },
            id,
        )
    }
}
