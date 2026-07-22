export interface ShippingQuote {
  carrier: string
  service: string
  deliveryDays: number
  price: number
}

export interface ShippingPackage {
  weightKg: number
  widthCm: number
  heightCm: number
  lengthCm: number
  insuranceValue: number
}

export interface ShippingQuoteInput {
  originCep: string
  destinationCep: string
  packages: ShippingPackage[]
}
