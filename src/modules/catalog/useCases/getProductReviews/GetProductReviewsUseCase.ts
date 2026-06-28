import { Injectable, NotFoundException } from '@nestjs/common';
import { CatalogRepository } from '../../repositories/CatalogRepository';
import {
  ProductReviewsResponse,
  ReviewDistribution,
  ReviewItemResponse,
} from '../../types/CatalogProductReviews';

function toNumber(value: { toNumber(): number } | number): number {
  return typeof value === 'number' ? value : value.toNumber();
}

interface Params {
  productId: string;
  page?: number;
  limit?: number;
  rating?: number;
  sort?: 'recent' | 'top';
}

@Injectable()
export class GetProductReviewsUseCase {
  constructor(private catalogRepository: CatalogRepository) {}

  async execute({
    productId,
    page = 1,
    limit = 10,
    rating,
    sort = 'recent',
  }: Params): Promise<ProductReviewsResponse> {
    const raw = await this.catalogRepository.findReviewsByProductId(productId, {
      page,
      limit,
      rating,
      sort,
    });

    if (!raw.productExists) {
      throw new NotFoundException(`Produto não encontrado`);
    }

    const allReviews = raw.allReviews;
    const reviewCount = allReviews.length;

    const avgRating =
      reviewCount > 0
        ? Math.round(
            (allReviews.reduce((sum, r) => sum + toNumber(r.rating), 0) /
              reviewCount) *
              10,
          ) / 10
        : 0;

    const distribution: ReviewDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const r of allReviews) {
      const star = Math.round(toNumber(r.rating)) as 1 | 2 | 3 | 4 | 5;
      if (star >= 1 && star <= 5) distribution[star]++;
    }

    const allPhotos = allReviews.flatMap((r) => r.photos);

    const offset = (page - 1) * limit;
    const hasMore = offset + limit < raw.total;

    const items: ReviewItemResponse[] = raw.filteredReviews.map((r) => ({
      id: r.id,
      rating: Math.round(toNumber(r.rating) * 10) / 10,
      ...(r.comment && { text: r.comment }),
      photos: r.photos,
      ...(r.country && { country: r.country }),
      createdAt: r.createdAt.toISOString(),
    }));

    return {
      aggregate: {
        rating: avgRating,
        reviewCount,
        distribution,
        photos: allPhotos,
        ...(raw.aiSummary && { aiSummary: raw.aiSummary }),
      },
      items,
      total: raw.total,
      hasMore,
    };
  }
}
