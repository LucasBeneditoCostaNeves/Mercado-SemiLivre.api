import { CategoryProducts, Product, ProductVariation, ReviewProduct } from '@prisma/client'

export type RawCatalogProduct = Product & {
  categoryProducts: CategoryProducts
  ProductVariation: (ProductVariation & {
    ReviewProduct: ReviewProduct[]
  })[]
}

export abstract class CatalogRepository {
  abstract findProducts(): Promise<RawCatalogProduct[]>
  abstract findDepartments(): Promise<CategoryProducts[]>
}
