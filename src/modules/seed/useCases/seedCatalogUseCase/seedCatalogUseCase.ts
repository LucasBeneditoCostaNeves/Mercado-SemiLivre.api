import { Injectable, UnprocessableEntityException } from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'

const FIXED_USER_ID = '06d772fe-4df5-4476-820f-41a4795dc1b2'

interface ReviewInput {
  rating: number
  comment: string
  date: string
}

interface ProductInput {
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  stock: number
  brand?: string | null
  warrantyInformation: string
  thumbnail: string
  images: string[]
  reviews: ReviewInput[]
}

export interface SeedCatalogResult {
  brands: number
  categories: number
  products: number
  variations: number
  images: number
  reviews: number
}

@Injectable()
export class SeedCatalogUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(products: ProductInput[]): Promise<SeedCatalogResult> {
    const uniqueBrandNames = [...new Set(products.map((p) => p.brand ?? 'Generic'))]
    const uniqueCategoryNames = [
      ...new Set(products.map((p) => p.category[0].toUpperCase() + p.category.slice(1))),
    ]

    try {
      const brandUpserts = uniqueBrandNames.map((name) =>
        this.prisma.brand.upsert({ where: { name }, create: { name }, update: {} }),
      )

      const categoryUpserts = uniqueCategoryNames.map((name) =>
        this.prisma.categoryProducts.upsert({ where: { name }, create: { name, status: true }, update: {} }),
      )

      const [brands, categories] = await this.prisma.$transaction([...brandUpserts, ...categoryUpserts]).then(
        (results) => [results.slice(0, uniqueBrandNames.length), results.slice(uniqueBrandNames.length)],
      )

      const brandMap = new Map((brands as { id: string; name: string }[]).map((b) => [b.name, b.id]))
      const categoryMap = new Map((categories as { id: string; name: string }[]).map((c) => [c.name, c.id]))

      let imageCount = 0
      let reviewCount = 0

      for (const p of products) {
        const brandName = p.brand ?? 'Generic'
        const categoryName = p.category[0].toUpperCase() + p.category.slice(1)

        const product = await this.prisma.product.create({
          data: {
            title: p.title,
            status: true,
            category_product_id: categoryMap.get(categoryName)!,
            seller_user_id: FIXED_USER_ID,
            brand_id: brandMap.get(brandName)!,
            thumbnail: p.thumbnail,
            warrantyInformation: p.warrantyInformation,
          },
        })

        const variation = await this.prisma.productVariation.create({
          data: {
            title: p.title,
            discountPercentage: p.discountPercentage,
            price: p.price,
            quantity: p.stock,
            description: p.description,
            product_id: product.id,
            status: true,
          },
        })

        const imageOps = p.images.map((link) =>
          this.prisma.productVariationImages.create({
            data: { link, product_variation_id: variation.id },
          }),
        )

        const reviewOps = p.reviews.map((r) =>
          this.prisma.reviewProduct.create({
            data: {
              rating: r.rating,
              comment: r.comment,
              product_variation_id: variation.id,
              reviewer_id: FIXED_USER_ID,
              createdAt: new Date(r.date),
            },
          }),
        )

        await this.prisma.$transaction([...imageOps, ...reviewOps])

        imageCount += p.images.length
        reviewCount += p.reviews.length
      }

      return {
        brands: uniqueBrandNames.length,
        categories: uniqueCategoryNames.length,
        products: products.length,
        variations: products.length,
        images: imageCount,
        reviews: reviewCount,
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err)
      throw new UnprocessableEntityException(`Falha ao inserir dados de seed: ${message}`)
    }
  }
}
