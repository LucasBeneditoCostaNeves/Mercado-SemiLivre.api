import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'

@Injectable()
export class ProductQuestionService {
    constructor(private prisma: PrismaService) {}

    async ask(productId: string, buyerUserId: string, question: string) {
        const product = await this.prisma.product.findUnique({ where: { id: productId } })

        if (!product) {
            throw new NotFoundException('Produto não encontrado')
        }

        return this.prisma.productQuestion.create({
            data: { product_id: productId, buyer_user_id: buyerUserId, question },
        })
    }

    async listAnswered(productId: string) {
        return this.prisma.productQuestion.findMany({
            where: { product_id: productId, answer: { not: null } },
            orderBy: { answeredAt: 'desc' },
        })
    }

    async listMine(productId: string, buyerUserId: string) {
        return this.prisma.productQuestion.findMany({
            where: { product_id: productId, buyer_user_id: buyerUserId },
            orderBy: { createdAt: 'desc' },
        })
    }

    async listForSeller(sellerId: string, status?: 'pending' | 'answered') {
        return this.prisma.productQuestion.findMany({
            where: {
                product: { seller_user_id: sellerId },
                ...(status === 'pending' ? { answer: null } : {}),
                ...(status === 'answered' ? { answer: { not: null } } : {}),
            },
            include: { product: { select: { id: true, title: true, thumbnail: true } } },
            orderBy: { createdAt: 'desc' },
        })
    }

    async answer(questionId: string, sellerId: string, answer: string) {
        const question = await this.prisma.productQuestion.findUnique({
            where: { id: questionId },
            include: { product: true },
        })

        if (!question) {
            throw new NotFoundException('Pergunta não encontrada')
        }

        if (question.product.seller_user_id !== sellerId) {
            throw new ForbiddenException('Acesso negado a esta pergunta')
        }

        return this.prisma.productQuestion.update({
            where: { id: questionId },
            data: { answer, answeredAt: new Date() },
        })
    }
}
