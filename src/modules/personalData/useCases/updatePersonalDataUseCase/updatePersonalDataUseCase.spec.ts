import { PersonalData, Gender } from '../../entities/PersonalData'
import { PersonalDataRepositoryInMemory } from '../../repositories/PersonalDataRepositoryInMemory'
import { UpdatePersonalDataUseCase } from './updatePersonalDataUseCase'
import { PersonalDataNotFoundError } from 'src/domain/errors/personalData/PersonalDataNotFoundError'

describe('dado um userId com dados pessoais existentes', () => {
    let repo: PersonalDataRepositoryInMemory
    let useCase: UpdatePersonalDataUseCase

    beforeEach(() => {
        repo = new PersonalDataRepositoryInMemory()
        useCase = new UpdatePersonalDataUseCase(repo)
    })

    describe('quando os novos dados são válidos', () => {
        it('então deve atualizar os campos informados', async () => {
            const pd = new PersonalData({
                cpf: 'encrypted',
                birthDate: new Date('1990-01-01'),
                phone: '(11) 91234-5678',
                gender: Gender.MALE,
                userId: 'user-1',
            })
            repo.items.push(pd)

            await useCase.execute({ userId: 'user-1', phone: '(21) 98765-4321', gender: Gender.OTHER })

            const updated = repo.items[0]
            expect(updated.phone).toBe('(21) 98765-4321')
            expect(updated.gender).toBe(Gender.OTHER)
        })
    })

    describe('quando não existe registro para o userId', () => {
        it('então deve lançar PersonalDataNotFoundError', async () => {
            await expect(
                useCase.execute({ userId: 'nonexistent', phone: '(11) 91234-5678' }),
            ).rejects.toBeInstanceOf(PersonalDataNotFoundError)
        })
    })
})
