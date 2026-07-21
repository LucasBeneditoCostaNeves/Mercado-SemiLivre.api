import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { ShippingController } from './shipping.controller'
import { ShippingService } from './shipping.service'
import { ShippingGateway } from './gateway/ShippingGateway'
import { MelhorEnvioShippingGateway } from './gateway/MelhorEnvioShippingGateway'

@Module({
  imports: [DatabaseModule],
  controllers: [ShippingController],
  providers: [ShippingService, { provide: ShippingGateway, useClass: MelhorEnvioShippingGateway }],
})
export class ShippingModule {}
