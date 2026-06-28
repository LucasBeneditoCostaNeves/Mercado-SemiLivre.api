export type ReviewItemResponse = {
  id: string;
  rating: number;
  text?: string;
  photos: string[];
  country?: string;
  createdAt: string;
};

export type ReviewDistribution = Record<1 | 2 | 3 | 4 | 5, number>;

export type ReviewAggregateResponse = {
  rating: number;
  reviewCount: number;
  distribution: ReviewDistribution;
  photos: string[];
  aiSummary?: string;
};

export type ProductReviewsResponse = {
  aggregate: ReviewAggregateResponse;
  items: ReviewItemResponse[];
  total: number;
  hasMore: boolean;
};
