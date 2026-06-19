import { AddressRepositoryInMemory } from '../../repositories/AddressRepositoryInMemory'
import { CreateAddressUseCase } from './createAddressUseCase'

const baseInput = {
    userId: 'user-1',
    cep: '01310-100',
    state: 'SP',
    city: 'São Paulo',
    street: 'Av. Paulista',
    number: '1000',
}

describe('dado um usuário autenticado', () => {
    let repo: AddressRepositoryInMemory
    let useCase: CreateAddressUseCase

    beforeEach(() => {
        repo = new AddressRepositoryInMemory()
        useCase = new CreateAddressUseCase(repo)
    })

    describe('quando cria um endereço com dados válidos', () => {
        it('então deve persistir o endereço', async () => {
            const result = await useCase.execute(baseInput)

            expect(repo.items).toHaveLength(1)
            expect(result.userId).toBe(baseInput.userId)
            expect(result.city).toBe(baseInput.city)
        })

        it('então isDefault deve ser false por padrão', async () => {
            const result = await useCase.execute(baseInput)
            expect(result.isDefault).toBe(false)
        })

        it('então deve permitir criar múltiplos endereços para o mesmo usuário', async () => {
            await useCase.execute(baseInput)
            await useCase.execute({ ...baseInput, street: 'Rua Augusta', number: '200' })
            expect(repo.items).toHaveLength(2)
        })
    })
})
