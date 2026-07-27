import { z } from 'zod'

export const createCouponBodySchema = z
    .object({
        code: z.string().trim().min(3).max(40),
        discountType: z.enum(['percentage', 'fixed']),
        discountValue: z.number().positive(),
        scope: z.enum(['global', 'seller', 'product']),
        // Aceitos por compatibilidade com o payload que o frontend já envia,
        // mas ignorados: createdById/createdByRole/sellerId (quando ator é fornecedor)
        // são sempre derivados do usuário autenticado no servidor.
        createdByRole: z.enum(['admin', 'seller']).optional(),
        createdById: z.string().optional(),
        sellerId: z.string().uuid().optional(),
        productId: z.string().uuid().optional(),
        minOrderValue: z.number().nonnegative().optional(),
        maxDiscountValue: z.number().positive().optional(),
        usageLimit: z.number().int().positive().optional(),
        usageLimitPerUser: z.number().int().positive().optional(),
        startsAt: z.string(),
        expiresAt: z.string().optional(),
        isActive: z.boolean().optional(),
    })
    .strict()

// A tela de edição reaproveita o mesmo formulário/action do "criar" e sempre
// reenvia o payload inteiro (code, scope, createdByRole/createdById/sellerId
// inclusive). O schema de update aceita o mesmo formato do de criação — o
// CouponService.update() já ignora os campos que não fazem sentido mudar
// (code, scope, productId, ownership) e só aplica o subconjunto editável.
export const updateCouponBodySchema = createCouponBodySchema.partial()

export const couponIdParamsSchema = z
    .object({
        id: z.uuid(),
    })
    .strict()

export const listCouponsQuerySchema = z
    .object({
        scope: z.enum(['global', 'seller', 'product']).optional(),
        sellerId: z.string().uuid().optional(),
        isActive: z
            .enum(['true', 'false'])
            .optional()
            .transform((v) => (v === undefined ? undefined : v === 'true')),
    })
    .strict()

export const validateCouponBodySchema = z
    .object({
        code: z.string().trim().min(1),
        cartItemIds: z.array(z.string().uuid()).min(1),
    })
    .strict()
