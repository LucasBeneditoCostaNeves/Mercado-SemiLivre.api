import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { CouponController } from './coupon.controller'
import { CouponService } from './coupon.service'

@Module({
    imports: [DatabaseModule],
    controllers: [CouponController],
    providers: [CouponService],
    exports: [CouponService],
})
export class CouponModule {}
