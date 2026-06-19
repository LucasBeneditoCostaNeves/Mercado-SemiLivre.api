import { encryptCpf, decryptCpf } from './cpf-encryption'

describe('dado um CPF em texto plano, quando criptografado e descriptografado', () => {
    const VALID_KEY = '0'.repeat(64)

    beforeAll(() => {
        process.env.CPF_ENCRYPTION_KEY = VALID_KEY
    })

    it('então deve retornar o valor original após o roundtrip', () => {
        const cpf = '123.456.789-09'
        const encrypted = encryptCpf(cpf)
        expect(decryptCpf(encrypted)).toBe(cpf)
    })

    it('então deve produzir o mesmo ciphertext para o mesmo CPF (determinístico)', () => {
        const cpf = '987.654.321-00'
        expect(encryptCpf(cpf)).toBe(encryptCpf(cpf))
    })

    it('então o ciphertext deve ser diferente do texto plano', () => {
        const cpf = '123.456.789-09'
        expect(encryptCpf(cpf)).not.toBe(cpf)
    })

    describe('dado que CPF_ENCRYPTION_KEY não está definida', () => {
        it('então deve lançar um erro', () => {
            const original = process.env.CPF_ENCRYPTION_KEY
            delete process.env.CPF_ENCRYPTION_KEY
            expect(() => encryptCpf('123.456.789-09')).toThrow('CPF_ENCRYPTION_KEY env var is not set')
            process.env.CPF_ENCRYPTION_KEY = original
        })
    })
})
