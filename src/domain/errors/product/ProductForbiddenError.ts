export class ProductForbiddenError extends Error {
    constructor() {
        super('Acesso negado a este produto')
        this.name = 'ProductForbiddenError'
    }
}
