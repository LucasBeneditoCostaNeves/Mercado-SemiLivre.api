import { Address } from '../../entities/Address'
import { AddressRepositoryInMemory } from '../../repositories/AddressRepositoryInMemory'
import { DeleteAddressUseCase } from './deleteAddressUseCase'
import { AddressNotFoundError } from 'src/domain/errors/address/AddressNotFoundError'
import { AddressForbiddenError } from 'src/domain/errors/address/AddressForbiddenError'

const makeAddress = (userId: string) =>
    new Address({
        cep: '01310-100',
        state: 'SP',
        city: 'São Paulo',
        street: 'Av. Paulista',
        number: '1',
        userId,
    })

describe('dado um usuário com endereços cadastrados', () => {
    let repo: AddressRepositoryInMemory
    let useCase: DeleteAddressUseCase

    beforeEach(() => {
        repo = new AddressRepositoryInMemory()
        useCase = new DeleteAddressUseCase(repo)
    })

    describe('quando deleta o próprio endereço', () => {
        it('então deve remover o endereço do repositório', async () => {
            const address = makeAddress('user-1')
            repo.items.push(address)

            await useCase.execute({ id: address.id, userId: 'user-1' })

            expect(repo.items).toHaveLength(0)
        })
    })

    describe('quando tenta deletar endereço inexistente', () => {
        it('então deve lançar AddressNotFoundError', async () => {
            await expect(useCase.execute({ id: 'nonexistent', userId: 'user-1' })).rejects.toBeInstanceOf(AddressNotFoundError)
        })
    })

    describe('quando tenta deletar endereço de outro usuário', () => {
        it('então deve lançar AddressForbiddenError', async () => {
            const address = makeAddress('user-2')
            repo.items.push(address)

            await expect(useCase.execute({ id: address.id, userId: 'user-1' })).rejects.toBeInstanceOf(AddressForbiddenError)
        })
    })
})
