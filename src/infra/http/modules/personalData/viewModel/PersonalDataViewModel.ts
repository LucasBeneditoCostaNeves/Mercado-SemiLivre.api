import { PersonalData } from 'src/modules/personalData/entities/PersonalData'
import { decryptCpf } from 'src/utils/cpf-encryption'
import { maskCpf } from 'src/utils/cpf-mask'

export class PersonalDataViewModel {
    static toHTTP(personalData: PersonalData) {
        const decrypted = decryptCpf(personalData.cpf)
        return {
            id: personalData.id,
            cpf: maskCpf(decrypted),
            birthDate: personalData.birthDate,
            phone: personalData.phone,
            gender: personalData.gender,
            userId: personalData.userId,
            createdAt: personalData.createdAt,
            updatedAt: personalData.updatedAt,
        }
    }
}
