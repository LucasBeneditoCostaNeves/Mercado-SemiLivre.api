import { ProductVariation } from '../entities/ProductVariation';

export interface ProductVariationDTO {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  status: boolean;
  product_id: string;
  discountPercentage: number;
  images: { id: string; link: string }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdateDTO {
  id: string;
  title?: string;
  email?: string;
  status?: boolean;
}

export interface IProductVariationUpdateDTO {
  id: string;
  title?: string;
  description?: string;
  price?: number;
  quantity?: number;
  discountPercentage?: number;
  status?: boolean;
}

export interface ProductVariationOwner {
  id: string;
  sellerId: string;
}

export abstract class ProductVariationRepository {
  abstract create(productVariation: ProductVariation): Promise<void>;
  abstract findMany(): Promise<ProductVariationDTO[]>;
  abstract findOwnerById(id: string): Promise<ProductVariationOwner | null>;
  abstract update(data: IProductVariationUpdateDTO): Promise<void>;
}
