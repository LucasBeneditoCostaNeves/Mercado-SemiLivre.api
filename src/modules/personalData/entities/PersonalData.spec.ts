import { PersonalData, Gender } from './PersonalData'

const makePersonalData = (overrides = {}) =>
    new PersonalData({
        cpf: 'encrypted-cpf',
        birthDate: new Date('1990-01-01'),
        phone: '(11) 91234-5678',
        gender: Gender.MALE,
        userId: 'user-id-1',
        ...overrides,
    })

describe('dado uma entidade PersonalData', () => {
    describe('quando criada sem id', () => {
        it('então deve gerar um UUID automaticamente', () => {
            const pd = makePersonalData()
            expect(pd.id).toBeDefined()
            expect(pd.id).toHaveLength(36)
        })
    })

    describe('quando criada sem createdAt e updatedAt', () => {
        it('então deve usar a data atual como padrão', () => {
            const before = new Date()
            const pd = makePersonalData()
            expect(pd.createdAt.getTime()).toBeGreaterThanOrEqual(before.getTime())
            expect(pd.updatedAt.getTime()).toBeGreaterThanOrEqual(before.getTime())
        })
    })

    describe('quando criada com um id fornecido', () => {
        it('então deve usar o id fornecido', () => {
            const pd = makePersonalData({}, )
            const pd2 = new PersonalData(
                { cpf: 'c', birthDate: new Date(), phone: 'p', gender: Gender.FEMALE, userId: 'u' },
                'fixed-id',
            )
            expect(pd2.id).toBe('fixed-id')
        })
    })

    describe('quando os setters são chamados', () => {
        it('então deve atualizar os valores corretamente', () => {
            const pd = makePersonalData()
            pd.phone = '(21) 99999-0000'
            pd.gender = Gender.OTHER
            expect(pd.phone).toBe('(21) 99999-0000')
            expect(pd.gender).toBe(Gender.OTHER)
        })
    })
})
