import { PersonalData } from '../entities/PersonalData'

export interface IPersonalDataUpdateDTO {
    userId: string
    birthDate?: Date
    phone?: string
    gender?: string
}

export abstract class PersonalDataRepository {
    abstract create(personalData: PersonalData): Promise<void>
    abstract findByUserId(userId: string): Promise<PersonalData | null>
    abstract findByCpf(cpfEncrypted: string): Promise<PersonalData | null>
    abstract update(data: IPersonalDataUpdateDTO): Promise<void>
}
