import { PersonalData } from '../entities/PersonalData'
import { IPersonalDataUpdateDTO, PersonalDataRepository } from './PersonalDataRepository'

export class PersonalDataRepositoryInMemory implements PersonalDataRepository {
    public items: PersonalData[] = []

    async create(personalData: PersonalData): Promise<void> {
        this.items.push(personalData)
    }

    async findByUserId(userId: string): Promise<PersonalData | null> {
        return this.items.find(pd => pd.userId === userId) ?? null
    }

    async findByCpf(cpfEncrypted: string): Promise<PersonalData | null> {
        return this.items.find(pd => pd.cpf === cpfEncrypted) ?? null
    }

    async update({ userId, birthDate, phone, gender }: IPersonalDataUpdateDTO): Promise<void> {
        const pd = this.items.find(item => item.userId === userId)
        if (!pd) return
        if (birthDate !== undefined) pd.birthDate = birthDate
        if (phone !== undefined) pd.phone = phone
        if (gender !== undefined) pd.gender = gender as any
    }
}
