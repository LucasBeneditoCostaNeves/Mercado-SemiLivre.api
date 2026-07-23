import { Injectable } from '@nestjs/common';
import {
  IProductVariationUpdateDTO,
  ProductVariationRepository,
} from '../../repositories/ProductVariationRepository';
import { ProductForbiddenError } from 'src/domain/errors/product/ProductForbiddenError';
import { ProductVariationNotFoundError } from 'src/domain/errors/product/ProductVariationNotFoundError';
import { NoFieldsToUpdateError } from 'src/domain/errors/NoFieldsToUpdateError';

interface IUpdateProductVariationRequest {
  dataVariation: IProductVariationUpdateDTO;
  sellerId: string;
}

@Injectable()
export class UpdateProductVariationUseCase {
  constructor(private productVariationRepository: ProductVariationRepository) {}

  async execute({ dataVariation, sellerId }: IUpdateProductVariationRequest) {
    const {
      id,
      title,
      description,
      price,
      quantity,
      discountPercentage,
      status,
    } = dataVariation;

    const variation = await this.productVariationRepository.findOwnerById(id);

    if (!variation) {
      throw new ProductVariationNotFoundError();
    }

    if (variation.sellerId !== sellerId) {
      throw new ProductForbiddenError();
    }

    const dataToUpdate: Omit<IProductVariationUpdateDTO, 'id'> = {};

    if (title !== undefined) dataToUpdate.title = title.trim();
    if (description !== undefined)
      dataToUpdate.description = description.trim();
    if (price !== undefined) dataToUpdate.price = price;
    if (quantity !== undefined) dataToUpdate.quantity = quantity;
    if (discountPercentage !== undefined)
      dataToUpdate.discountPercentage = discountPercentage;
    if (status !== undefined) dataToUpdate.status = status;

    if (Object.keys(dataToUpdate).length === 0) {
      throw new NoFieldsToUpdateError();
    }

    await this.productVariationRepository.update({ id, ...dataToUpdate });
  }
}
