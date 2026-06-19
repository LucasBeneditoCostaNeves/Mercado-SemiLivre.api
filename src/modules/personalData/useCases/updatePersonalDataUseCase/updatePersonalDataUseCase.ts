import { Injectable } from '@nestjs/common'
import { PersonalDataRepository } from '../../repositories/PersonalDataRepository'
import { PersonalDataNotFoundError } from 'src/domain/errors/personalData/PersonalDataNotFoundError'
import { Gender } from '../../entities/PersonalData'

interface IUpdatePersonalDataRequest {
    userId: string
    birthDate?: Date
    phone?: string
    gender?: Gender
}

@Injectable()
export class UpdatePersonalDataUseCase {
    constructor(private personalDataRepository: PersonalDataRepository) {}

    async execute({ userId, birthDate, phone, gender }: IUpdatePersonalDataRequest): Promise<void> {
        const existing = await this.personalDataRepository.findByUserId(userId)
        if (!existing) throw new PersonalDataNotFoundError()

        await this.personalDataRepository.update({ userId, birthDate, phone, gender })
    }
}
