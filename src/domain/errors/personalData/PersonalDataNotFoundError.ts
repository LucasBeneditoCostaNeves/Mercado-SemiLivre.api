export class PersonalDataNotFoundError extends Error {
    constructor() {
        super('Dados pessoais não encontrados')
        this.name = 'PersonalDataNotFoundError'
    }
}
