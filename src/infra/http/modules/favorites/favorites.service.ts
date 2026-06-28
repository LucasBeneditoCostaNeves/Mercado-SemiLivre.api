import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'

function toNumber(value: { toNumber(): number } | number): number {
  return typeof value === 'number' ? value : value.toNumber()
}

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async addFavorite(userId: string, productId: string) {
    const product = await this.prisma.product.findUnique({ where: { id: productId } })

    if (!product) {
      throw new NotFoundException('Produto não encontrado')
    }

    const existing = await this.prisma.userFavorite.findUnique({
      where: { userId_productId: { userId, productId } },
    })

    if (existing) {
      throw new ConflictException('Produto já está nos favoritos')
    }

    return this.prisma.userFavorite.create({ data: { userId, productId } })
  }

  async removeFavorite(userId: string, favoriteId: string) {
    const favorite = await this.prisma.userFavorite.findUnique({
      where: { id: favoriteId },
    })

    if (!favorite) {
      throw new NotFoundException('Favorito não encontrado')
    }

    if (favorite.userId !== userId) {
      throw new ForbiddenException('Sem permissão para remover este favorito')
    }

    await this.prisma.userFavorite.delete({ where: { id: favoriteId } })
  }

  async listFavorites(userId: string, page: number, limit: number) {
    const skip = (page - 1) * limit

    const [total, favorites] = await Promise.all([
      this.prisma.userFavorite.count({ where: { userId } }),
      this.prisma.userFavorite.findMany({
        where: { userId },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          product: {
            include: {
              ProductVariation: {
                where: { status: true },
                orderBy: { price: 'asc' },
                take: 1,
              },
            },
          },
        },
      }),
    ])

    return {
      total,
      page,
      limit,
      items: favorites.map((fav) => {
        const variation = fav.product.ProductVariation[0]
        return {
          favoriteId: fav.id,
          productId: fav.product.id,
          title: fav.product.title,
          thumbnail: fav.product.thumbnail,
          price: variation ? toNumber(variation.price) : null,
          discountPercentage: variation ? toNumber(variation.discountPercentage) : null,
          createdAt: fav.createdAt,
        }
      }),
    }
  }

  async checkFavorite(userId: string, productId: string) {
    const favorite = await this.prisma.userFavorite.findUnique({
      where: { userId_productId: { userId, productId } },
    })

    return { isFavorite: !!favorite, favoriteId: favorite?.id ?? null }
  }
}
