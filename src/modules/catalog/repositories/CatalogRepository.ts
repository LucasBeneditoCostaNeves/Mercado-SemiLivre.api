import { Brand, CategoryProducts, Product, ProductVariation, ReviewProduct, User, productVariationImages } from '@prisma/client'

export type RawCatalogProduct = Product & {
  categoryProducts: CategoryProducts
  ProductVariation: (ProductVariation & {
    ReviewProduct: ReviewProduct[]
  })[]
}

export type RawCatalogProductDetail = Product & {
  brand: Brand
  categoryProducts: CategoryProducts
  user: Pick<User, 'name'>
  ProductVariation: (ProductVariation & {
    ReviewProduct: ReviewProduct[]
    productVariationImages: productVariationImages[]
  })[]
}

export abstract class CatalogRepository {
  abstract findProducts(): Promise<RawCatalogProduct[]>
  abstract findDepartments(): Promise<CategoryProducts[]>
  abstract findProductById(id: string): Promise<RawCatalogProductDetail | null>
}
