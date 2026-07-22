import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'

@Injectable()
export class ProductVariationImageService {
    constructor(private prisma: PrismaService) {}

    private async findOwnedVariation(variationId: string, sellerId: string) {
        const variation = await this.prisma.productVariation.findUnique({
            where: { id: variationId },
            include: { product: true },
        })

        if (!variation) {
            throw new NotFoundException('Variação de produto não encontrada')
        }

        if (variation.product.seller_user_id !== sellerId) {
            throw new ForbiddenException('Acesso negado a esta variação de produto')
        }

        return variation
    }

    async addImages(variationId: string, sellerId: string, files: Express.Multer.File[]) {
        await this.findOwnedVariation(variationId, sellerId)

        const links = files.map((file) => `/uploads/products/${file.filename}`)

        await this.prisma.productVariationImages.createMany({
            data: links.map((link) => ({ link, product_variation_id: variationId })),
        })

        return this.prisma.productVariationImages.findMany({
            where: { product_variation_id: variationId },
        })
    }

    async removeImage(imageId: string, sellerId: string) {
        const image = await this.prisma.productVariationImages.findUnique({
            where: { id: imageId },
            include: { productVariation: { include: { product: true } } },
        })

        if (!image) {
            throw new NotFoundException('Imagem não encontrada')
        }

        if (image.productVariation.product.seller_user_id !== sellerId) {
            throw new ForbiddenException('Acesso negado a esta imagem')
        }

        await this.prisma.productVariationImages.delete({ where: { id: imageId } })
    }
}
