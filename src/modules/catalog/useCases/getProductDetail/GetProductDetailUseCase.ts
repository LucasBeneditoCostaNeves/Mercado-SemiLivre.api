import { Injectable, NotFoundException } from '@nestjs/common'
import { CatalogRepository } from '../../repositories/CatalogRepository'
import { CatalogProductDetail } from '../../types/CatalogProductDetail'

const FREE_SHIPPING_THRESHOLD = 100
const INSTALLMENTS_THRESHOLD = 120
const INSTALLMENTS_COUNT = 12
const OFERTA_DISCOUNT_THRESHOLD = 10
const NOVO_DAYS_THRESHOLD = 7

function toNumber(value: { toNumber(): number } | number): number {
  return typeof value === 'number' ? value : value.toNumber()
}

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface Params {
  id: string
}

@Injectable()
export class GetProductDetailUseCase {
  constructor(private catalogRepository: CatalogRepository) {}

  async execute({ id }: Params): Promise<CatalogProductDetail> {
    const product = await this.catalogRepository.findProductById(id)

    if (!product) {
      throw new NotFoundException(`Produto não encontrado`)
    }

    const activeVariations = product.ProductVariation.filter((v) => v.status)

    if (activeVariations.length === 0) {
      throw new NotFoundException(`Produto não encontrado`)
    }

    const novoThreshold = new Date()
    novoThreshold.setDate(novoThreshold.getDate() - NOVO_DAYS_THRESHOLD)

    const prices = activeVariations.map((v) => toNumber(v.price))
    const price = Math.min(...prices)

    const cheapestVariation = activeVariations.find((v) => toNumber(v.price) === price)!

    const allReviews = activeVariations.flatMap((v) => v.ReviewProduct)
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

    const hasDiscount = activeVariations.some(
      (v) => toNumber(v.discountPercentage) >= OFERTA_DISCOUNT_THRESHOLD,
    )
    const badge: CatalogProductDetail['badge'] = hasDiscount
      ? 'OFERTA'
      : product.createdAt >= novoThreshold
        ? 'NOVO'
        : undefined

    const images = activeVariations.flatMap((v) =>
      v.productVariationImages.map((img) => img.link),
    )

    const variations = activeVariations.map((v) => ({
      id: v.id,
      title: v.title,
      price: toNumber(v.price),
      quantity: v.quantity,
      discountPercentage: toNumber(v.discountPercentage),
    }))

    return {
      id: product.id,
      title: product.title,
      price,
      installments,
      freeShipping,
      rating,
      reviewCount,
      badge,
      imageUrl: product.thumbnail,
      images,
      description: cheapestVariation.description,
      warrantyInformation: product.warrantyInformation,
      brand: product.brand.name,
      category: product.categoryProducts.name,
      seller: product.user.name,
      variations,
    }
  }
}
