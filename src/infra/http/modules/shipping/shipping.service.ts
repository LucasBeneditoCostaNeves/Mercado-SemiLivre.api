import { Injectable } from '@nestjs/common'
import { createHash } from 'crypto'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'
import { ShippingQuoteUnavailableError } from 'src/domain/errors/shipping/ShippingQuoteUnavailableError'
import { ShippingGateway } from './gateway/ShippingGateway'
import { ShippingPackage, ShippingQuote } from './shipping.types'

const CACHE_TTL_MS = 10 * 60 * 1000
const CIRCUIT_BREAKER_THRESHOLD = 3
const CIRCUIT_BREAKER_COOLDOWN_MS = 60 * 1000

const DEFAULT_PACKAGE = {
  weightKg: 0.3,
  widthCm: 16,
  heightCm: 2,
  lengthCm: 11,
}

interface QuoteItem {
  productVariationId: string
  quantity: number
}

interface CacheEntry {
  quotes: ShippingQuote[]
  expiresAt: number
}

@Injectable()
export class ShippingService {
  private readonly cache = new Map<string, CacheEntry>()
  private consecutiveFailures = 0
  private circuitOpenUntil = 0

  constructor(
    private prisma: PrismaService,
    private shippingGateway: ShippingGateway,
  ) {}

  async quote(destinationCep: string, items: QuoteItem[]): Promise<ShippingQuote[]> {
    const cacheKey = this.buildCacheKey(destinationCep, items)
    const cached = this.cache.get(cacheKey)
    if (cached && cached.expiresAt > Date.now()) {
      return cached.quotes
    }

    if (Date.now() < this.circuitOpenUntil) {
      throw new ShippingQuoteUnavailableError()
    }

    const packages = await this.buildPackages(items)

    try {
      const quotes = await this.shippingGateway.calculate({
        originCep: process.env.SHIPPING_ORIGIN_CEP ?? '01310930',
        destinationCep,
        packages,
      })
      this.consecutiveFailures = 0
      this.cache.set(cacheKey, { quotes, expiresAt: Date.now() + CACHE_TTL_MS })
      return quotes
    } catch (error) {
      this.consecutiveFailures += 1
      if (this.consecutiveFailures >= CIRCUIT_BREAKER_THRESHOLD) {
        this.circuitOpenUntil = Date.now() + CIRCUIT_BREAKER_COOLDOWN_MS
      }
      throw error instanceof ShippingQuoteUnavailableError ? error : new ShippingQuoteUnavailableError()
    }
  }

  private async buildPackages(items: QuoteItem[]): Promise<ShippingPackage[]> {
    const variations = await this.prisma.productVariation.findMany({
      where: { id: { in: items.map((item) => item.productVariationId) } },
    })

    return items.map((item) => {
      const variation = variations.find((v) => v.id === item.productVariationId)
      const unitPrice = variation ? Number(variation.price) : 0

      return {
        weightKg: DEFAULT_PACKAGE.weightKg * item.quantity,
        widthCm: DEFAULT_PACKAGE.widthCm,
        heightCm: DEFAULT_PACKAGE.heightCm,
        lengthCm: DEFAULT_PACKAGE.lengthCm,
        insuranceValue: unitPrice * item.quantity,
      }
    })
  }

  private buildCacheKey(destinationCep: string, items: QuoteItem[]): string {
    const itemsSignature = items
      .map((item) => `${item.productVariationId}:${item.quantity}`)
      .sort()
      .join('|')
    const hash = createHash('sha1').update(itemsSignature).digest('hex')
    return `${destinationCep}:${hash}`
  }
}
