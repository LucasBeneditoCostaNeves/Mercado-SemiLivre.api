import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
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
import {
  CreateCheckoutSessionDto,
  CreateOrderItemReviewDto,
  SellerSalesSummaryQueryDto,
} from './dto/order.dto';
import { OrderViewModel } from './viewModel/OrderViewModel';
import { SellerSalesSummaryViewModel } from './viewModel/SellerSalesSummaryViewModel';
import { SellerOrderItemViewModel } from './viewModel/SellerOrderItemViewModel';
import { CustomerOrderViewModel } from './viewModel/CustomerOrderViewModel';
import { FulfillmentItemViewModel } from './viewModel/FulfillmentItemViewModel';
import { OrderItemReviewViewModel } from './viewModel/OrderItemReviewViewModel';

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

  @Get('seller/summary')
  @UsePipes(ZodValidationPipe)
  async getSellerSalesSummary(
    @CurrentUser() user: AuthenticatedUser,
    @Query() query: SellerSalesSummaryQueryDto,
  ) {
    const summary = await this.orderService.getSellerSalesSummary(
      user.id,
      query.period,
    );
    return SellerSalesSummaryViewModel.toHTTP(summary);
  }

  @Get('by-session/:sessionId')
  async getBySessionId(
    @CurrentUser() user: AuthenticatedUser,
    @Param('sessionId') sessionId: string,
  ) {
    const order = await this.orderService.findBySessionId(sessionId, user.id);
    return OrderViewModel.toHTTP(order);
  }

  @Get('seller/items')
  async getSellerOrderItems(@CurrentUser() user: AuthenticatedUser) {
    const groups = await this.orderService.getSellerOrderItems(user.id);
    return groups.map((group) => SellerOrderItemViewModel.toHTTP(group));
  }

  @Get('mine')
  async getMyOrders(@CurrentUser() user: AuthenticatedUser) {
    const orders = await this.orderService.getMyOrders(user.id);
    return orders.map((order) => CustomerOrderViewModel.toHTTP(order));
  }

  @Patch('items/:itemId/advance')
  async advanceOrderItem(
    @CurrentUser() user: AuthenticatedUser,
    @Param('itemId') itemId: string,
  ) {
    const item = await this.orderService.advanceOrderItem(itemId, user.id);
    return FulfillmentItemViewModel.toHTTP(item);
  }

  @Patch('items/:itemId/receive')
  async receiveOrderItem(
    @CurrentUser() user: AuthenticatedUser,
    @Param('itemId') itemId: string,
  ) {
    const item = await this.orderService.receiveOrderItem(itemId, user.id);
    return FulfillmentItemViewModel.toHTTP(item);
  }

  @Post('items/:orderItemId/reviews')
  @UsePipes(ZodValidationPipe)
  async createOrderItemReview(
    @CurrentUser() user: AuthenticatedUser,
    @Param('orderItemId') orderItemId: string,
    @Body() body: CreateOrderItemReviewDto,
  ) {
    const review = await this.orderService.createOrderItemReview({
      orderItemId,
      userId: user.id,
      rating: body.rating,
      comment: body.comment,
    });
    return OrderItemReviewViewModel.toHTTP(review);
  }
}
