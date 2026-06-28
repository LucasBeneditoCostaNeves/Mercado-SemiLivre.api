import { PersonalData, Gender } from '../../entities/PersonalData'
import { PersonalDataRepositoryInMemory } from '../../repositories/PersonalDataRepositoryInMemory'
import { GetPersonalDataUseCase } from './getPersonalDataUseCase'
import { PersonalDataNotFoundError } from 'src/domain/errors/personalData/PersonalDataNotFoundError'

describe('dado um userId', () => {
    let repo: PersonalDataRepositoryInMemory
    let useCase: GetPersonalDataUseCase

    beforeEach(() => {
        repo = new PersonalDataRepositoryInMemory()
        useCase = new GetPersonalDataUseCase(repo)
    })

    describe('quando existe um registro de dados pessoais para o userId', () => {
        it('então deve retornar os dados pessoais', async () => {
            const pd = new PersonalData({
                cpf: 'encrypted',
                birthDate: new Date('1990-01-01'),
                phone: '(11) 91234-5678',
                gender: Gender.FEMALE,
                userId: 'user-1',
            })
            repo.items.push(pd)

            const result = await useCase.execute({ userId: 'user-1' })

            expect(result.id).toBe(pd.id)
            expect(result.userId).toBe('user-1')
        })
    })

    describe('quando não existe registro para o userId', () => {
        it('então deve lançar PersonalDataNotFoundError', async () => {
            await expect(useCase.execute({ userId: 'nonexistent' })).rejects.toBeInstanceOf(PersonalDataNotFoundError)
        })
    })
})
