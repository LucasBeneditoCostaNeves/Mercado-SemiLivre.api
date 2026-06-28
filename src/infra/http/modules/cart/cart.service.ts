import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'

function toNumber(value: { toNumber(): number } | number): number {
  return typeof value === 'number' ? value : value.toNumber()
}

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async findByUser(userId: string) {
    const items = await this.prisma.cartItem.findMany({
      where: { userId },
      include: {
        productVariation: {
          include: {
            product: {
              include: {
                user: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    })

    return {
      items: items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        productId: item.productVariation.product.id,
        productTitle: item.productVariation.product.title,
        productThumbnail: item.productVariation.product.thumbnail,
        variationId: item.productVariation.id,
        variationTitle: item.productVariation.title,
        price: toNumber(item.productVariation.price),
        discountPercentage: toNumber(item.productVariation.discountPercentage),
        freeShipping: toNumber(item.productVariation.price) >= 100,
        sellerName: item.productVariation.product.user.name,
        sellerId: item.productVariation.product.user.id,
      })),
    }
  }

  async upsertItem(userId: string, productVariationId: string, quantity: number) {
    const variation = await this.prisma.productVariation.findUnique({
      where: { id: productVariationId },
    })

    if (!variation) {
      throw new NotFoundException('Variação de produto não encontrada')
    }

    return this.prisma.cartItem.upsert({
      where: { userId_productVariationId: { userId, productVariationId } },
      create: { userId, productVariationId, quantity },
      update: { quantity: { increment: quantity } },
    })
  }

  async updateQuantity(userId: string, cartItemId: string, quantity: number) {
    const item = await this.prisma.cartItem.findFirst({
      where: { id: cartItemId, userId },
    })

    if (!item) {
      throw new NotFoundException('Item do carrinho não encontrado')
    }

    return this.prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity },
    })
  }

  async removeItem(userId: string, cartItemId: string) {
    const item = await this.prisma.cartItem.findFirst({
      where: { id: cartItemId, userId },
    })

    if (!item) {
      throw new NotFoundException('Item do carrinho não encontrado')
    }

    await this.prisma.cartItem.delete({ where: { id: cartItemId } })
  }
}
