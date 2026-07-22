import { Injectable } from '@nestjs/common'
import { ShippingQuoteUnavailableError } from 'src/domain/errors/shipping/ShippingQuoteUnavailableError'
import { ShippingGateway } from './ShippingGateway'
import { ShippingQuote, ShippingQuoteInput } from '../shipping.types'

interface MelhorEnvioCalculateResponseItem {
  id: number
  name: string
  price?: string
  delivery_time?: number
  company?: { name?: string }
  error?: string
}

const REQUEST_TIMEOUT_MS = 8000

@Injectable()
export class MelhorEnvioShippingGateway extends ShippingGateway {
  private readonly baseUrl = process.env.MELHOR_ENVIO_BASE_URL ?? 'https://sandbox.melhorenvio.com.br'
  private readonly token = process.env.MELHOR_ENVIO_TOKEN ?? ''

  async calculate(input: ShippingQuoteInput): Promise<ShippingQuote[]> {
    if (!this.token) {
      throw new ShippingQuoteUnavailableError()
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

    let response: Response
    try {
      response = await fetch(`${this.baseUrl}/api/v2/me/shipment/calculate`, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${this.token}`,
          'User-Agent': 'Portal Mercado SemiLivre (contato@mercadosemilivre.com)',
        },
        body: JSON.stringify({
          from: { postal_code: input.originCep },
          to: { postal_code: input.destinationCep },
          products: input.packages.map((pkg, index) => ({
            id: String(index + 1),
            width: pkg.widthCm,
            height: pkg.heightCm,
            length: pkg.lengthCm,
            weight: pkg.weightKg,
            insurance_value: pkg.insuranceValue,
            quantity: 1,
          })),
        }),
      })
    } catch {
      throw new ShippingQuoteUnavailableError()
    } finally {
      clearTimeout(timeout)
    }

    if (!response.ok) {
      throw new ShippingQuoteUnavailableError()
    }

    const data = (await response.json()) as MelhorEnvioCalculateResponseItem[]

    return data
      .filter((item) => !item.error && item.price)
      .map((item) => ({
        carrier: item.company?.name ?? 'Transportadora',
        service: item.name,
        deliveryDays: item.delivery_time ?? 0,
        price: Number(item.price),
      }))
      .sort((a, b) => a.price - b.price)
  }
}
