import { Injectable } from '@nestjs/common';
import { ProductVariationRepository } from '../../repositories/ProductVariationRepository';
import { ProductVariation } from '../../entities/ProductVariation';
import { ProductRepository } from 'src/modules/product/repositories/ProductRepository';
import { ProductNotFoundError } from 'src/domain/errors/product/ProductNotFoundError';
import { ProductForbiddenError } from 'src/domain/errors/product/ProductForbiddenError';

interface CreatedProductVariationRequest {
  title: string;
  price: number;
  quantity: number;
  description: string;
  product_id: string;
  discountPercentage: number;
  status: boolean;
  sellerId: string;
}

@Injectable()
export class createProductVariationUseCase {
  constructor(
    private productVariationRepository: ProductVariationRepository,
    private productRepository: ProductRepository,
  ) {}

  async execute({
    title,
    price,
    quantity,
    description,
    product_id,
    discountPercentage,
    status,
    sellerId,
  }: CreatedProductVariationRequest) {
    const product = await this.productRepository.findById(product_id);

    if (!product) {
      throw new ProductNotFoundError();
    }

    if (product.seller_user_id !== sellerId) {
      throw new ProductForbiddenError();
    }

    const productVariation = new ProductVariation({
      title,
      price,
      quantity,
      status,
      description,
      product_id,
      discountPercentage,
    });

    await this.productVariationRepository.create(productVariation);

    return productVariation;
  }
}
