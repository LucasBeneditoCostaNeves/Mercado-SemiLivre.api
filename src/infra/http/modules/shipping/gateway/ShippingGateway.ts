import { ShippingQuote, ShippingQuoteInput } from '../shipping.types'

export abstract class ShippingGateway {
  abstract calculate(input: ShippingQuoteInput): Promise<ShippingQuote[]>
}
