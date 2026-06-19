export class AddressForbiddenError extends Error {
    constructor() {
        super('Acesso negado a este endereço')
        this.name = 'AddressForbiddenError'
    }
}
