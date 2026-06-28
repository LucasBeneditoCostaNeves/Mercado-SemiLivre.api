import { Injectable } from '@nestjs/common'
import { PersonalData, Gender } from '../../entities/PersonalData'
import { PersonalDataRepository } from '../../repositories/PersonalDataRepository'
import { PersonalDataAlreadyExistsError } from 'src/domain/errors/personalData/PersonalDataAlreadyExistsError'
import { encryptCpf } from 'src/utils/cpf-encryption'

interface ICreatePersonalDataRequest {
    userId: string
    cpf: string
    birthDate: Date
    phone: string
    gender: Gender
}

@Injectable()
export class CreatePersonalDataUseCase {
    constructor(private personalDataRepository: PersonalDataRepository) {}

    async execute({ userId, cpf, birthDate, phone, gender }: ICreatePersonalDataRequest): Promise<PersonalData> {
        const existing = await this.personalDataRepository.findByUserId(userId)
        if (existing) throw new PersonalDataAlreadyExistsError()

        const encryptedCpf = encryptCpf(cpf)

        const cpfTaken = await this.personalDataRepository.findByCpf(encryptedCpf)
        if (cpfTaken) throw new PersonalDataAlreadyExistsError()

        const personalData = new PersonalData({ userId, cpf: encryptedCpf, birthDate, phone, gender })

        await this.personalDataRepository.create(personalData)

        return personalData
    }
}
