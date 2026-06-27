export type CatalogProductVariation = {
  id: string
  title: string
  price: number
  quantity: number
  discountPercentage: number
}

export type CatalogProductDetail = {
  id: string
  title: string
  price: number
  installments: string
  freeShipping: boolean
  rating: number
  reviewCount: number
  badge?: 'OFERTA' | 'NOVO'
  imageUrl: string
  images: string[]
  description: string
  warrantyInformation: string
  brand: string
  category: string
  seller: string
  variations: CatalogProductVariation[]
}
