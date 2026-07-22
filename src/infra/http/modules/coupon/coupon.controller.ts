import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { CurrentUser } from '../auth/decorators/currentUser.decorator'
import type { AuthenticatedUser } from '../auth/models/authRequestModel'
import { SellerOrAdminProfileGuard } from '../auth/guards/sellerOrAdminProfile.guard'
import { CouponService } from './coupon.service'
import {
    CreateCouponBodyDto,
    UpdateCouponBodyDto,
    CouponIdParamsDto,
    ListCouponsQueryDto,
    ValidateCouponBodyDto,
} from './dto/coupon.dto'

@Controller('coupons')
@UsePipes(ZodValidationPipe)
export class CouponController {
    constructor(private couponService: CouponService) {}

    private isAdmin(user: AuthenticatedUser): boolean {
        return !!process.env.ADMIN_PROFILE_ID && user.profileId === process.env.ADMIN_PROFILE_ID
    }

    @Post()
    @UseGuards(SellerOrAdminProfileGuard)
    create(@CurrentUser() user: AuthenticatedUser, @Body() body: CreateCouponBodyDto) {
        return this.couponService.create(body, { id: user.id, isAdmin: this.isAdmin(user) })
    }

    @Get()
    @UseGuards(SellerOrAdminProfileGuard)
    list(@CurrentUser() user: AuthenticatedUser, @Query() query: ListCouponsQueryDto) {
        return this.couponService.findMany(query, { id: user.id, isAdmin: this.isAdmin(user) })
    }

    @Patch('/:id')
    @UseGuards(SellerOrAdminProfileGuard)
    update(
        @CurrentUser() user: AuthenticatedUser,
        @Param() params: CouponIdParamsDto,
        @Body() body: UpdateCouponBodyDto,
    ) {
        return this.couponService.update(params.id, body, {
            id: user.id,
            isAdmin: this.isAdmin(user),
        })
    }

    @Post('/validate')
    validate(@CurrentUser() user: AuthenticatedUser, @Body() body: ValidateCouponBodyDto) {
        return this.couponService.validate(body.code, body.cartItemIds, user.id)
    }
}
