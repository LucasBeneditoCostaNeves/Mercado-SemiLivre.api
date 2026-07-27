import { Injectable } from '@nestjs/common';
import {
  IProductVariationUpdateDTO,
  ProductVariationDTO,
  ProductVariationOwner,
  ProductVariationRepository,
} from 'src/modules/productVariation/repositories/ProductVariationRepository';
import { ProductVariation } from 'src/modules/productVariation/entities/ProductVariation';
import { PrismaProductVariationMapper } from '../mappers/PrismaProductVariation';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaProductVariationRepository implements ProductVariationRepository {
  constructor(private prisma: PrismaService) {}

  async create(productVariation: ProductVariation): Promise<void> {
    const raw = PrismaProductVariationMapper.toPrisma(productVariation);

    await this.prisma.productVariation.create({
      data: raw,
    });
  }

  async findMany(): Promise<ProductVariationDTO[]> {
    const profiles = await this.prisma.productVariation.findMany({
      include: { productVariationImages: { select: { id: true, link: true } } },
    });
    return profiles.map(({ productVariationImages, ...p }) => ({
      ...p,
      price: Number(p.price),
      discountPercentage: Number(p.discountPercentage),
      images: productVariationImages,
    }));
  }

  async findOwnerById(id: string): Promise<ProductVariationOwner | null> {
    const variation = await this.prisma.productVariation.findUnique({
      where: { id },
      include: { product: { select: { seller_user_id: true } } },
    });

    if (!variation) {
      return null;
    }

    return { id: variation.id, sellerId: variation.product.seller_user_id };
  }

  async update({ id, ...data }: IProductVariationUpdateDTO): Promise<void> {
    await this.prisma.productVariation.update({
      where: { id },
      data,
    });
  }
}
