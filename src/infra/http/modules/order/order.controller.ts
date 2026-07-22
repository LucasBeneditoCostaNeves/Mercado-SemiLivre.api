import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  UsePipes,
} from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common';
import type { Request } from 'express';
import { ZodValidationPipe } from 'nestjs-zod';
import { Public } from '../auth/decorators/isPublic';
import { CurrentUser } from '../auth/decorators/currentUser.decorator';
import type { AuthenticatedUser } from '../auth/models/authRequestModel';
import { OrderService } from './order.service';
import { CreateCheckoutSessionDto } from './dto/order.dto';
import { OrderViewModel } from './viewModel/OrderViewModel';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('checkout-session')
  @UsePipes(ZodValidationPipe)
  async createCheckoutSession(
    @CurrentUser() user: AuthenticatedUser,
    @Body() body: CreateCheckoutSessionDto,
  ) {
    return this.orderService.createCheckoutSession({
      userId: user.id,
      addressId: body.addressId,
      cartItemIds: body.cartItemIds,
      shippingCarrier: body.shippingCarrier,
      shippingService: body.shippingService,
      shippingPrice: body.shippingPrice,
      couponCode: body.couponCode,
    });
  }

  @Public()
  @Post('webhook/stripe')
  @HttpCode(200)
  async handleStripeWebhook(@Req() req: RawBodyRequest<Request>) {
    const signature = req.headers['stripe-signature'];
    if (typeof signature !== 'string' || !req.rawBody) {
      throw new BadRequestException('Assinatura ausente');
    }

    await this.orderService.handleWebhookEvent(req.rawBody, signature);
    return { received: true };
  }

  @Get('by-session/:sessionId')
  async getBySessionId(
    @CurrentUser() user: AuthenticatedUser,
    @Param('sessionId') sessionId: string,
  ) {
    const order = await this.orderService.findBySessionId(sessionId, user.id);
    return OrderViewModel.toHTTP(order);
  }
}
