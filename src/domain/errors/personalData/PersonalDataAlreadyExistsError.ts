export class PersonalDataAlreadyExistsError extends Error {
    constructor() {
        super('Dados pessoais já cadastrados para este usuário')
        this.name = 'PersonalDataAlreadyExistsError'
    }
}
