import { Address } from '../../entities/Address'
import { AddressRepositoryInMemory } from '../../repositories/AddressRepositoryInMemory'
import { SetDefaultAddressUseCase } from './setDefaultAddressUseCase'
import { AddressNotFoundError } from 'src/domain/errors/address/AddressNotFoundError'
import { AddressForbiddenError } from 'src/domain/errors/address/AddressForbiddenError'

const makeAddress = (userId: string, isDefault = false) =>
    new Address({
        cep: '01310-100',
        state: 'SP',
        city: 'São Paulo',
        street: 'Av. Paulista',
        number: '1',
        userId,
        isDefault,
    })

describe('dado um usuário com endereços cadastrados', () => {
    let repo: AddressRepositoryInMemory
    let useCase: SetDefaultAddressUseCase

    beforeEach(() => {
        repo = new AddressRepositoryInMemory()
        useCase = new SetDefaultAddressUseCase(repo)
    })

    describe('quando define um endereço como padrão e nenhum era padrão antes', () => {
        it('então o endereço deve ser marcado como isDefault: true', async () => {
            const address = makeAddress('user-1')
            repo.items.push(address)

            await useCase.execute({ id: address.id, userId: 'user-1' })

            expect(repo.items[0].isDefault).toBe(true)
        })
    })

    describe('quando já existe um endereço padrão', () => {
        it('então o endereço anterior deve perder o isDefault e o novo deve recebê-lo', async () => {
            const old = makeAddress('user-1', true)
            const next = makeAddress('user-1', false)
            repo.items.push(old, next)

            await useCase.execute({ id: next.id, userId: 'user-1' })

            expect(old.isDefault).toBe(false)
            expect(next.isDefault).toBe(true)
        })

        it('então somente um endereço deve ser padrão', async () => {
            const a1 = makeAddress('user-1', true)
            const a2 = makeAddress('user-1', false)
            repo.items.push(a1, a2)

            await useCase.execute({ id: a2.id, userId: 'user-1' })

            const defaults = repo.items.filter(a => a.isDefault)
            expect(defaults).toHaveLength(1)
            expect(defaults[0].id).toBe(a2.id)
        })
    })

    describe('quando o endereço não existe', () => {
        it('então deve lançar AddressNotFoundError', async () => {
            await expect(useCase.execute({ id: 'nonexistent', userId: 'user-1' })).rejects.toBeInstanceOf(AddressNotFoundError)
        })
    })

    describe('quando o endereço pertence a outro usuário', () => {
        it('então deve lançar AddressForbiddenError', async () => {
            const address = makeAddress('user-2')
            repo.items.push(address)

            await expect(useCase.execute({ id: address.id, userId: 'user-1' })).rejects.toBeInstanceOf(AddressForbiddenError)
        })
    })
})
