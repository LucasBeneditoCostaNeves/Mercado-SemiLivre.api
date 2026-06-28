import { createZodDto } from 'nestjs-zod'
import {
  addCartItemSchema,
  cartItemParamsSchema,
  updateCartItemSchema,
} from '../schemas/cart.schemas'

export class AddCartItemDto extends createZodDto(addCartItemSchema) {}
export class UpdateCartItemDto extends createZodDto(updateCartItemSchema) {}
export class CartItemParamsDto extends createZodDto(cartItemParamsSchema) {}
