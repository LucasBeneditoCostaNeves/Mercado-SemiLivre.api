import { Injectable } from '@nestjs/common'
import { CATEGORY_ICON_MAP } from '../../constants/category-icon-map'
import { CatalogRepository } from '../../repositories/CatalogRepository'
import { CatalogProduct } from '../../types/CatalogProduct'

const FREE_SHIPPING_THRESHOLD = 100
const INSTALLMENTS_THRESHOLD = 120
const INSTALLMENTS_COUNT = 12
const OFERTA_DISCOUNT_THRESHOLD = 10
const NOVO_DAYS_THRESHOLD = 7

interface Params {
  limit: number
  skip: number
}

function toNumber(value: { toNumber(): number } | number): number {
  return typeof value === 'number' ? value : value.toNumber()
}

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

@Injectable()
export class ListCatalogProductsUseCase {
  constructor(private catalogRepository: CatalogRepository) {}

  async execute({ limit, skip }: Params): Promise<{ items: CatalogProduct[]; total: number }> {
    const rawProducts = await this.catalogRepository.findProducts()

    const noveThreshold = new Date()
    noveThreshold.setDate(noveThreshold.getDate() - NOVO_DAYS_THRESHOLD)

    const catalog: CatalogProduct[] = rawProducts
      .filter((p) => p.ProductVariation.length > 0)
      .map((p) => {
        const variations = p.ProductVariation
        const allReviews = variations.flatMap((v) => v.ReviewProduct)

        const prices = variations.map((v) => toNumber(v.price))
        const price = Math.min(...prices)

        const reviewCount = allReviews.length
        const rating =
          reviewCount > 0
            ? Math.round((allReviews.reduce((sum, r) => sum + toNumber(r.rating), 0) / reviewCount) * 10) / 10
            : 0

        const installments =
          price >= INSTALLMENTS_THRESHOLD
            ? `${INSTALLMENTS_COUNT}x R$ ${formatBRL(price / INSTALLMENTS_COUNT)} sem juros`
            : `à vista R$ ${formatBRL(price)}`

        const freeShipping = price >= FREE_SHIPPING_THRESHOLD

        const hasDiscount = variations.some(
          (v) => toNumber(v.discountPercentage) >= OFERTA_DISCOUNT_THRESHOLD,
        )
        const badge: CatalogProduct['badge'] = hasDiscount
          ? 'OFERTA'
          : p.createdAt >= noveThreshold
            ? 'NOVO'
            : undefined

        return {
          id: p.id,
          title: p.title,
          price,
          installments,
          freeShipping,
          rating,
          reviewCount,
          icon: CATEGORY_ICON_MAP[p.categoryProducts.name] ?? 'ti-package',
          imageUrl: p.thumbnail,
          badge,
        }
      })

    catalog.sort((a, b) => b.reviewCount - a.reviewCount)

    return {
      items: catalog.slice(skip, skip + limit),
      total: catalog.length,
    }
  }
}
