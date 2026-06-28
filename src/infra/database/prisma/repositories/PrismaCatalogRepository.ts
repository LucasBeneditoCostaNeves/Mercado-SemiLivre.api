import { Injectable } from '@nestjs/common';
import { CategoryProducts } from '@prisma/client';
import {
  CatalogRepository,
  FindProductsFilters,
  FindReviewsOptions,
  RawCatalogProduct,
  RawCatalogProductDetail,
  RawProductReviews,
} from 'src/modules/catalog/repositories/CatalogRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCatalogRepository implements CatalogRepository {
  constructor(private prisma: PrismaService) {}

  async findProducts(
    filters?: FindProductsFilters,
  ): Promise<RawCatalogProduct[]> {
    return this.prisma.product.findMany({
      where: {
        status: true,
        ...(filters?.q && {
          title: { contains: filters.q, mode: 'insensitive' },
        }),
        ...(filters?.brand?.length && {
          brand: { name: { in: filters.brand } },
        }),
        ...(filters?.category?.length && {
          categoryProducts: { name: { in: filters.category } },
        }),
      },
      include: {
        brand: true,
        categoryProducts: true,
        ProductVariation: {
          where: { status: true },
          include: { ReviewProduct: true },
        },
      },
    });
  }

  async findDepartments(): Promise<CategoryProducts[]> {
    return this.prisma.categoryProducts.findMany({ where: { status: true } });
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
    });
  }

  async findReviewsByProductId(
    productId: string,
    opts: FindReviewsOptions = {},
  ): Promise<RawProductReviews> {
    const { page = 1, limit = 10, rating, sort = 'recent' } = opts;

    const product = await this.prisma.product.findFirst({
      where: { id: productId, status: true },
      select: {
        aiSummary: true,
        ProductVariation: {
          where: { status: true },
          select: {
            ReviewProduct: {
              orderBy:
                sort === 'top' ? { rating: 'desc' } : { createdAt: 'desc' },
            },
          },
        },
      },
    });

    if (!product) {
      return {
        allReviews: [],
        filteredReviews: [],
        total: 0,
        productExists: false,
        aiSummary: null,
      };
    }

    const allReviews = product.ProductVariation.flatMap((v) => v.ReviewProduct);

    const filteredReviews = rating
      ? allReviews.filter((r) => Math.round(Number(r.rating)) === rating)
      : allReviews;

    const offset = (page - 1) * limit;
    const paginated = filteredReviews.slice(offset, offset + limit);

    return {
      allReviews,
      filteredReviews: paginated,
      total: filteredReviews.length,
      productExists: true,
      aiSummary: product.aiSummary,
    };
  }
}
