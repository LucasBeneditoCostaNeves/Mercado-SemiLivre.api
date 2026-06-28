import { Injectable } from '@nestjs/common'
import { CATEGORY_ICON_MAP } from '../../constants/category-icon-map'
import { CatalogRepository } from '../../repositories/CatalogRepository'
import { CatalogProduct } from '../../types/CatalogProduct'

const FREE_SHIPPING_THRESHOLD = 100
const INSTALLMENTS_THRESHOLD = 120
const INSTALLMENTS_COUNT = 12
const OFERTA_DISCOUNT_THRESHOLD = 10
const NOVO_DAYS_THRESHOLD = 7

const SPECIAL_CATEGORIES = new Set(['bestsellers', 'recommended'])

interface Params {
  limit: number
  skip: number
  q?: string
  sort?: 'price' | 'rating' | 'sales'
  order?: 'asc' | 'desc'
  freeShipping?: boolean
  minPrice?: number
  maxPrice?: number
  minRating?: number
  brand?: string[]
  category?: string[]
}

function toNumber(value: { toNumber(): number } | number): number {
  return typeof value === 'number' ? value : value.toNumber()
}

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

@Injectable()
export class ListCatalogProductsUseCase {
  constructor(private catalogRepository: CatalogRepository) {}

  async execute({
    limit,
    skip,
    q,
    sort,
    order = 'asc',
    freeShipping,
    minPrice,
    maxPrice,
    minRating,
    brand,
    category,
  }: Params): Promise<{ items: CatalogProduct[]; total: number; hasMore: boolean }> {
    const departmentFilter = category?.filter((c) => !SPECIAL_CATEGORIES.has(c))

    const rawProducts = await this.catalogRepository.findProducts({
      q,
      brand,
      category: departmentFilter?.length ? departmentFilter : undefined,
    })

    const novaThreshold = new Date()
    novaThreshold.setDate(novaThreshold.getDate() - NOVO_DAYS_THRESHOLD)

    let catalog: CatalogProduct[] = rawProducts
      .filter((p) => p.ProductVariation.length > 0)
      .map((p) => {
        const variations = p.ProductVariation
        const allReviews = variations.flatMap((v) => v.ReviewProduct)

        const prices = variations.map((v) => toNumber(v.price))
        const price = Math.min(...prices)

        const reviewCount = allReviews.length
        const rating =
          reviewCount > 0
            ? Math.round(
                (allReviews.reduce(
                  (sum, r) => sum + toNumber(r.rating),
                  0,
                ) /
                  reviewCount) *
                  10,
              ) / 10
            : 0

        const installments =
          price >= INSTALLMENTS_THRESHOLD
            ? `${INSTALLMENTS_COUNT}x R$ ${formatBRL(price / INSTALLMENTS_COUNT)} sem juros`
            : `à vista R$ ${formatBRL(price)}`

        const isFreeShipping = price >= FREE_SHIPPING_THRESHOLD

        const hasDiscount = variations.some(
          (v) => toNumber(v.discountPercentage) >= OFERTA_DISCOUNT_THRESHOLD,
        )
        const badge: CatalogProduct['badge'] = hasDiscount
          ? 'OFERTA'
          : p.createdAt >= novaThreshold
            ? 'NOVO'
            : undefined

        return {
          id: p.id,
          title: p.title,
          price,
          installments,
          freeShipping: isFreeShipping,
          rating,
          reviewCount,
          icon: CATEGORY_ICON_MAP[p.categoryProducts.name] ?? 'ti-package',
          imageUrl: p.thumbnail,
          badge,
          brand: p.brand?.name,
        }
      })

    if (freeShipping) {
      catalog = catalog.filter((p) => p.freeShipping)
    }
    if (minPrice !== undefined) {
      catalog = catalog.filter((p) => p.price >= minPrice)
    }
    if (maxPrice !== undefined) {
      catalog = catalog.filter((p) => p.price <= maxPrice)
    }
    if (minRating !== undefined) {
      catalog = catalog.filter((p) => p.rating >= minRating)
    }

    if (sort === 'price') {
      catalog.sort((a, b) =>
        order === 'asc' ? a.price - b.price : b.price - a.price,
      )
    } else if (sort === 'rating') {
      catalog.sort((a, b) =>
        order === 'asc' ? a.rating - b.rating : b.rating - a.rating,
      )
    } else if (sort === 'sales') {
      catalog.sort((a, b) =>
        order === 'asc'
          ? a.reviewCount - b.reviewCount
          : b.reviewCount - a.reviewCount,
      )
    } else {
      catalog.sort((a, b) => b.reviewCount - a.reviewCount)
    }

    const total = catalog.length
    const items = catalog.slice(skip, skip + limit)
    const hasMore = skip + limit < total

    return { items, total, hasMore }
  }
}
