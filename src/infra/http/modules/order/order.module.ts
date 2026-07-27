import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetAddressUseCase } from 'src/modules/address/useCases/getAddressUseCase/getAddressUseCase';
import { CouponModule } from '../coupon/coupon.module';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PaymentGateway } from './gateway/PaymentGateway';
import { StripePaymentGateway } from './gateway/StripePaymentGateway';

@Module({
  imports: [DatabaseModule, CouponModule],
  controllers: [OrderController],
  providers: [
    OrderService,
    GetAddressUseCase,
    { provide: PaymentGateway, useClass: StripePaymentGateway },
  ],
})
export class OrderModule {}
