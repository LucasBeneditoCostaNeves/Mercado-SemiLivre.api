import { Injectable } from '@nestjs/common'
import { PersonalData } from '../../entities/PersonalData'
import { PersonalDataRepository } from '../../repositories/PersonalDataRepository'
import { PersonalDataNotFoundError } from 'src/domain/errors/personalData/PersonalDataNotFoundError'

interface IGetPersonalDataRequest {
    userId: string
}

@Injectable()
export class GetPersonalDataUseCase {
    constructor(private personalDataRepository: PersonalDataRepository) {}

    async execute({ userId }: IGetPersonalDataRequest): Promise<PersonalData> {
        const personalData = await this.personalDataRepository.findByUserId(userId)
        if (!personalData) throw new PersonalDataNotFoundError()
        return personalData
    }
}
