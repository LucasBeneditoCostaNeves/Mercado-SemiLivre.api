export type CatalogProduct = {
  id: string
  title: string
  price: number
  installments: string
  freeShipping: boolean
  rating: number
  reviewCount: number
  icon: string
  imageUrl: string
  badge?: 'OFERTA' | 'NOVO'
  brand?: string
}
