import { PersonalDataRepositoryInMemory } from '../../repositories/PersonalDataRepositoryInMemory'
import { CreatePersonalDataUseCase } from './createPersonalDataUseCase'
import { PersonalDataAlreadyExistsError } from 'src/domain/errors/personalData/PersonalDataAlreadyExistsError'
import { Gender } from '../../entities/PersonalData'

const VALID_KEY = '0'.repeat(64)

const baseInput = {
    userId: 'user-1',
    cpf: '123.456.789-09',
    birthDate: new Date('1990-06-15'),
    phone: '(11) 91234-5678',
    gender: Gender.MALE,
}

describe('dado um usuário sem dados pessoais cadastrados', () => {
    let repo: PersonalDataRepositoryInMemory
    let useCase: CreatePersonalDataUseCase

    beforeAll(() => {
        process.env.CPF_ENCRYPTION_KEY = VALID_KEY
    })

    beforeEach(() => {
        repo = new PersonalDataRepositoryInMemory()
        useCase = new CreatePersonalDataUseCase(repo)
    })

    describe('quando os dados são válidos', () => {
        it('então deve criar e persistir os dados pessoais', async () => {
            const result = await useCase.execute(baseInput)

            expect(repo.items).toHaveLength(1)
            expect(result.userId).toBe(baseInput.userId)
            expect(result.phone).toBe(baseInput.phone)
            expect(result.gender).toBe(baseInput.gender)
        })

        it('então o CPF armazenado não deve ser o texto plano', async () => {
            const result = await useCase.execute(baseInput)
            expect(result.cpf).not.toBe(baseInput.cpf)
        })
    })

    describe('quando já existem dados pessoais para o userId', () => {
        it('então deve lançar PersonalDataAlreadyExistsError', async () => {
            await useCase.execute(baseInput)
            await expect(useCase.execute(baseInput)).rejects.toBeInstanceOf(PersonalDataAlreadyExistsError)
        })

        it('então não deve persistir um segundo registro', async () => {
            await useCase.execute(baseInput)
            try { await useCase.execute(baseInput) } catch {}
            expect(repo.items).toHaveLength(1)
        })
    })

    describe('quando o CPF já está cadastrado por outro usuário', () => {
        it('então deve lançar PersonalDataAlreadyExistsError', async () => {
            await useCase.execute(baseInput)

            const otherInput = { ...baseInput, userId: 'user-2' }
            await expect(useCase.execute(otherInput)).rejects.toBeInstanceOf(PersonalDataAlreadyExistsError)
        })
    })
})
