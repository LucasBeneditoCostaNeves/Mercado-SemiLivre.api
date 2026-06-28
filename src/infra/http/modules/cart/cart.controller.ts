import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { CurrentUser } from '../auth/decorators/currentUser.decorator'
import type { AuthenticatedUser } from '../auth/models/authRequestModel'
import { CartService } from './cart.service'
import { AddCartItemDto, CartItemParamsDto, UpdateCartItemDto } from './dto/cart.dto'

@Controller('cart')
@UsePipes(ZodValidationPipe)
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  getCart(@CurrentUser() user: AuthenticatedUser) {
    return this.cartService.findByUser(user.id)
  }

  @Post('items')
  addItem(@CurrentUser() user: AuthenticatedUser, @Body() body: AddCartItemDto) {
    return this.cartService.upsertItem(user.id, body.productVariationId, body.quantity)
  }

  @Patch('items/:id')
  updateItem(
    @CurrentUser() user: AuthenticatedUser,
    @Param() params: CartItemParamsDto,
    @Body() body: UpdateCartItemDto,
  ) {
    return this.cartService.updateQuantity(user.id, params.id, body.quantity)
  }

  @Delete('items/:id')
  @HttpCode(204)
  removeItem(@CurrentUser() user: AuthenticatedUser, @Param() params: CartItemParamsDto) {
    return this.cartService.removeItem(user.id, params.id)
  }
}
