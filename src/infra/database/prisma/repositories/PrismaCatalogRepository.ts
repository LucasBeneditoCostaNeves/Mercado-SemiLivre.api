import { Injectable } from '@nestjs/common'
import { CategoryProducts } from '@prisma/client'
import { CatalogRepository, RawCatalogProduct, RawCatalogProductDetail } from 'src/modules/catalog/repositories/CatalogRepository'
import { PrismaService } from '../prisma.service'

@Injectable()
export class PrismaCatalogRepository implements CatalogRepository {
  constructor(private prisma: PrismaService) {}

  async findProducts(): Promise<RawCatalogProduct[]> {
    return this.prisma.product.findMany({
      where: { status: true },
      include: {
        categoryProducts: true,
        ProductVariation: {
          where: { status: true },
          include: { ReviewProduct: true },
        },
      },
    })
  }

  async findDepartments(): Promise<CategoryProducts[]> {
    return this.prisma.categoryProducts.findMany({ where: { status: true } })
  }

  async findProductById(id: string): Promise<RawCatalogProductDetail | null> {
    return this.prisma.product.findFirst({
      where: { id, status: true },
      include: {
        brand: true,
        categoryProducts: true,
        user: { select: { name: true } },
        ProductVariation: {
          where: { status: true },
          include: {
            ReviewProduct: true,
            productVariationImages: true,
          },
        },
      },
    })
  }
}
