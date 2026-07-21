export class ShippingQuoteUnavailableError extends Error {
    constructor() {
        super('Cálculo de frete temporariamente indisponível, tente novamente em instantes')
        this.name = 'ShippingQuoteUnavailableError'
    }
}
