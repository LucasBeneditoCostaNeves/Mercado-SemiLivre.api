import {
  Brand,
  CategoryProducts,
  Product,
  ProductVariation,
  ReviewProduct,
  User,
  productVariationImages,
} from '@prisma/client';

export type FindProductsFilters = {
  q?: string;
  brand?: string[];
  category?: string[];
};

export type FindReviewsOptions = {
  page?: number;
  limit?: number;
  rating?: number;
  sort?: 'recent' | 'top';
};

export type RawCatalogProduct = Product & {
  brand: Brand | null;
  categoryProducts: CategoryProducts;
  ProductVariation: (ProductVariation & {
    ReviewProduct: ReviewProduct[];
  })[];
};

export type RawCatalogProductDetail = Product & {
  brand: Brand;
  categoryProducts: CategoryProducts;
  user: Pick<User, 'name'>;
  ProductVariation: (ProductVariation & {
    ReviewProduct: ReviewProduct[];
    productVariationImages: productVariationImages[];
  })[];
};

export type RawProductReviews = {
  allReviews: ReviewProduct[];
  filteredReviews: ReviewProduct[];
  total: number;
  productExists: boolean;
  aiSummary: string | null;
};

export abstract class CatalogRepository {
  abstract findProducts(
    filters?: FindProductsFilters,
  ): Promise<RawCatalogProduct[]>;
  abstract findDepartments(): Promise<CategoryProducts[]>;
  abstract findProductById(id: string): Promise<RawCatalogProductDetail | null>;
  abstract findReviewsByProductId(
    productId: string,
    opts?: FindReviewsOptions,
  ): Promise<RawProductReviews>;
}
