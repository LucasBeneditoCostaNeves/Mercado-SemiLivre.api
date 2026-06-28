import { Address } from './Address'

const makeAddress = (overrides = {}) =>
    new Address({
        cep: '01310-100',
        state: 'SP',
        city: 'São Paulo',
        street: 'Av. Paulista',
        number: '1000',
        userId: 'user-id-1',
        ...overrides,
    })

describe('dado uma entidade Address', () => {
    describe('quando criada sem isDefault', () => {
        it('então isDefault deve ser false por padrão', () => {
            const address = makeAddress()
            expect(address.isDefault).toBe(false)
        })
    })

    describe('quando criada sem id', () => {
        it('então deve gerar um UUID automaticamente', () => {
            const address = makeAddress()
            expect(address.id).toBeDefined()
            expect(address.id).toHaveLength(36)
        })
    })

    describe('quando criada sem complement', () => {
        it('então complement deve ser undefined', () => {
            const address = makeAddress()
            expect(address.complement).toBeUndefined()
        })
    })

    describe('quando isDefault é definido como true', () => {
        it('então deve refletir o valor', () => {
            const address = makeAddress({ isDefault: true })
            expect(address.isDefault).toBe(true)
        })
    })

    describe('quando os setters são chamados', () => {
        it('então deve atualizar os campos corretamente', () => {
            const address = makeAddress()
            address.city = 'Campinas'
            address.isDefault = true
            expect(address.city).toBe('Campinas')
            expect(address.isDefault).toBe(true)
        })
    })
})
