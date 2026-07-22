import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/infra/database/prisma/prisma.service'
import type { Prisma } from '@prisma/client'

function toNumber(value: { toNumber(): number } | number): number {
    return typeof value === 'number' ? value : value.toNumber()
}

function normalizeCode(code: string): string {
    return code.trim().toUpperCase()
}

type Actor = { id: string; isAdmin: boolean }

interface CreateCouponInput {
    code: string
    discountType: 'percentage' | 'fixed'
    discountValue: number
    scope: 'global' | 'seller' | 'product'
    sellerId?: string
    productId?: string
    minOrderValue?: number
    maxDiscountValue?: number
    usageLimit?: number
    usageLimitPerUser?: number
    startsAt: string
    expiresAt?: string
    isActive?: boolean
}

interface UpdateCouponInput {
    discountType?: 'percentage' | 'fixed'
    discountValue?: number
    minOrderValue?: number
    maxDiscountValue?: number
    usageLimit?: number
    usageLimitPerUser?: number
    startsAt?: string
    expiresAt?: string
    isActive?: boolean
}

interface ListCouponsFilter {
    scope?: 'global' | 'seller' | 'product'
    sellerId?: string
    isActive?: boolean
}

@Injectable()
export class CouponService {
    constructor(private prisma: PrismaService) {}

    private toHttp(coupon: Prisma.CouponGetPayload<{ include: { usages: false } }> & { usages?: never }) {
        return {
            id: coupon.id,
            code: coupon.code,
            discountType: coupon.discountType,
            discountValue: toNumber(coupon.discountValue),
            scope: coupon.scope,
            createdByRole: coupon.createdByRole,
            createdById: coupon.createdById,
            sellerId: coupon.sellerId ?? undefined,
            productId: coupon.productId ?? undefined,
            minOrderValue: coupon.minOrderValue ? toNumber(coupon.minOrderValue) : undefined,
            maxDiscountValue: coupon.maxDiscountValue
                ? toNumber(coupon.maxDiscountValue)
                : undefined,
            usageLimit: coupon.usageLimit ?? undefined,
            usageLimitPerUser: coupon.usageLimitPerUser ?? undefined,
            usedCount: 0,
            startsAt: coupon.startsAt.toISOString(),
            expiresAt: coupon.expiresAt ? coupon.expiresAt.toISOString() : undefined,
            isActive: coupon.isActive,
            createdAt: coupon.createdAt.toISOString(),
            updatedAt: coupon.updatedAt.toISOString(),
        }
    }

    private async assertProductOwnership(productId: string, sellerId: string) {
        const product = await this.prisma.product.findUnique({ where: { id: productId } })
        if (!product) throw new NotFoundException('Produto não encontrado')
        if (product.seller_user_id !== sellerId) {
            throw new ForbiddenException('Você só pode criar cupons para produtos próprios')
        }
    }

    async create(input: CreateCouponInput, actor: Actor) {
        const code = normalizeCode(input.code)

        let sellerId: string | undefined
        let createdByRole: 'admin' | 'seller'

        if (actor.isAdmin) {
            createdByRole = 'admin'
            sellerId = input.scope === 'global' ? undefined : input.sellerId
        } else {
            createdByRole = 'seller'
            if (input.scope === 'global') {
                throw new ForbiddenException('Fornecedores não podem criar cupons globais')
            }
            sellerId = actor.id
            if (input.scope === 'product') {
                if (!input.productId) {
                    throw new BadRequestException('productId é obrigatório para escopo product')
                }
                await this.assertProductOwnership(input.productId, actor.id)
            }
        }

        const existing = await this.prisma.coupon.findUnique({ where: { code } })
        if (existing) throw new BadRequestException('Já existe um cupom com este código')

        const coupon = await this.prisma.coupon.create({
            data: {
                code,
                discountType: input.discountType,
                discountValue: input.discountValue,
                scope: input.scope,
                createdByRole,
                createdById: actor.id,
                sellerId,
                productId: input.productId,
                minOrderValue: input.minOrderValue,
                maxDiscountValue: input.maxDiscountValue,
                usageLimit: input.usageLimit,
                usageLimitPerUser: input.usageLimitPerUser,
                startsAt: new Date(input.startsAt),
                expiresAt: input.expiresAt ? new Date(input.expiresAt) : undefined,
                isActive: input.isActive ?? true,
            },
        })

        return this.withUsedCount(coupon)
    }

    async findMany(filter: ListCouponsFilter, actor: Actor) {
        const where: Prisma.CouponWhereInput = {}

        if (!actor.isAdmin) {
            where.OR = [{ sellerId: actor.id }, { createdById: actor.id }]
        } else {
            if (filter.sellerId) where.sellerId = filter.sellerId
        }

        if (filter.scope) where.scope = filter.scope
        if (filter.isActive !== undefined) where.isActive = filter.isActive

        const coupons = await this.prisma.coupon.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        })

        return Promise.all(coupons.map((coupon) => this.withUsedCount(coupon)))
    }

    async update(id: string, input: UpdateCouponInput, actor: Actor) {
        const coupon = await this.prisma.coupon.findUnique({ where: { id } })
        if (!coupon) throw new NotFoundException('Cupom não encontrado')

        if (!actor.isAdmin && coupon.createdById !== actor.id) {
            throw new ForbiddenException('Você só pode editar cupons próprios')
        }

        const updated = await this.prisma.coupon.update({
            where: { id },
            data: {
                discountType: input.discountType,
                discountValue: input.discountValue,
                minOrderValue: input.minOrderValue,
                maxDiscountValue: input.maxDiscountValue,
                usageLimit: input.usageLimit,
                usageLimitPerUser: input.usageLimitPerUser,
                startsAt: input.startsAt ? new Date(input.startsAt) : undefined,
                expiresAt: input.expiresAt ? new Date(input.expiresAt) : undefined,
                isActive: input.isActive,
            },
        })

        return this.withUsedCount(updated)
    }

    private async withUsedCount(coupon: Prisma.CouponGetPayload<object>) {
        const usedCount = await this.prisma.couponUsage.count({ where: { couponId: coupon.id } })
        return { ...this.toHttp(coupon), usedCount }
    }

    async validate(code: string, cartItemIds: string[], userId: string) {
        const normalized = normalizeCode(code)
        const coupon = await this.prisma.coupon.findUnique({ where: { code: normalized } })

        if (!coupon) throw new BadRequestException('Cupom não encontrado')
        if (!coupon.isActive) throw new BadRequestException('Cupom não está disponível')

        const now = new Date()
        if (coupon.startsAt > now) throw new BadRequestException('Cupom ainda não está válido')
        if (coupon.expiresAt && coupon.expiresAt < now) {
            throw new BadRequestException('Cupom expirado')
        }

        if (coupon.usageLimit !== null) {
            const totalUses = await this.prisma.couponUsage.count({
                where: { couponId: coupon.id },
            })
            if (totalUses >= coupon.usageLimit) throw new BadRequestException('Cupom esgotado')
        }

        if (coupon.usageLimitPerUser !== null) {
            const userUses = await this.prisma.couponUsage.count({
                where: { couponId: coupon.id, userId },
            })
            if (userUses >= coupon.usageLimitPerUser) {
                throw new BadRequestException('Você já utilizou este cupom')
            }
        }

        const cartItems = await this.prisma.cartItem.findMany({
            where: { id: { in: cartItemIds }, userId },
            include: { productVariation: { include: { product: true } } },
        })

        const applicableItems = cartItems.filter((item) => {
            if (coupon.scope === 'global') return true
            if (coupon.scope === 'seller') {
                return item.productVariation.product.seller_user_id === coupon.sellerId
            }
            return item.productVariation.product.id === coupon.productId
        })

        if (applicableItems.length === 0) {
            throw new BadRequestException('Cupom não aplicável aos itens deste carrinho')
        }

        const subtotal = applicableItems.reduce(
            (sum, item) => sum + toNumber(item.productVariation.price) * item.quantity,
            0
        )

        const minOrderValue = coupon.minOrderValue ? toNumber(coupon.minOrderValue) : undefined
        if (minOrderValue !== undefined && subtotal < minOrderValue) {
            throw new BadRequestException('Valor mínimo do pedido não atingido')
        }

        const discountValue = toNumber(coupon.discountValue)
        let discountAmount =
            coupon.discountType === 'percentage' ? (subtotal * discountValue) / 100 : discountValue

        const maxDiscountValue = coupon.maxDiscountValue
            ? toNumber(coupon.maxDiscountValue)
            : undefined
        if (maxDiscountValue !== undefined) {
            discountAmount = Math.min(discountAmount, maxDiscountValue)
        }
        discountAmount = Math.min(discountAmount, subtotal)

        return {
            couponId: coupon.id,
            code: coupon.code,
            discountAmount,
            appliedToItemIds: applicableItems.map((item) => item.id),
        }
    }

    async registerUsage(couponId: string, userId: string, orderId: string, discountApplied: number) {
        return this.prisma.$transaction(async (tx) => {
            const coupon = await tx.coupon.findUnique({ where: { id: couponId } })
            if (!coupon) return null

            if (coupon.usageLimit !== null) {
                const totalUses = await tx.couponUsage.count({ where: { couponId } })
                if (totalUses >= coupon.usageLimit) return null
            }

            if (coupon.usageLimitPerUser !== null) {
                const userUses = await tx.couponUsage.count({ where: { couponId, userId } })
                if (userUses >= coupon.usageLimitPerUser) return null
            }

            return tx.couponUsage.create({
                data: { couponId, userId, orderId, discountApplied },
            })
        })
    }
}
