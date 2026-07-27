import { createZodDto } from 'nestjs-zod'
import {
    createCouponBodySchema,
    updateCouponBodySchema,
    couponIdParamsSchema,
    listCouponsQuerySchema,
    validateCouponBodySchema,
} from '../schemas/coupon.schemas'

export class CreateCouponBodyDto extends createZodDto(createCouponBodySchema) {}
export class UpdateCouponBodyDto extends createZodDto(updateCouponBodySchema) {}
export class CouponIdParamsDto extends createZodDto(couponIdParamsSchema) {}
export class ListCouponsQueryDto extends createZodDto(listCouponsQuerySchema) {}
export class ValidateCouponBodyDto extends createZodDto(validateCouponBodySchema) {}
