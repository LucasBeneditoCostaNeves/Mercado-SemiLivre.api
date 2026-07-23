import { Injectable } from '@nestjs/common';
import { ProductVariationRepository } from '../../repositories/ProductVariationRepository';

@Injectable()
export class listProductVariationUseCase {
  constructor(private ProductVariationRepository: ProductVariationRepository) {}

  async execute() {
    const productVariation = this.ProductVariationRepository.findMany();
    return productVariation;
  }
}
