import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { ShippingService } from './shipping.service'
import { QuoteShippingDto } from './dto/shipping.dto'

@Controller('shipping')
@UsePipes(ZodValidationPipe)
export class ShippingController {
  constructor(private shippingService: ShippingService) {}

  @Post('quote')
  quote(@Body() body: QuoteShippingDto) {
    return this.shippingService.quote(body.destinationCep, body.items)
  }
}
