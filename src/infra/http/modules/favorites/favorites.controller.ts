import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { CurrentUser } from '../auth/decorators/currentUser.decorator'
import type { AuthenticatedUser } from '../auth/models/authRequestModel'
import { FavoritesService } from './favorites.service'
import { AddFavoriteDto, FavoriteParamsDto, ListFavoritesQueryDto } from './dto/favorites.dto'

@Controller('favorites')
@UsePipes(ZodValidationPipe)
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @Get()
  list(@CurrentUser() user: AuthenticatedUser, @Query() query: ListFavoritesQueryDto) {
    return this.favoritesService.listFavorites(user.id, query.page, query.limit)
  }

  @Get('check/:productId')
  check(@CurrentUser() user: AuthenticatedUser, @Param('productId') productId: string) {
    return this.favoritesService.checkFavorite(user.id, productId)
  }

  @Post()
  add(@CurrentUser() user: AuthenticatedUser, @Body() body: AddFavoriteDto) {
    return this.favoritesService.addFavorite(user.id, body.productId)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@CurrentUser() user: AuthenticatedUser, @Param() params: FavoriteParamsDto) {
    return this.favoritesService.removeFavorite(user.id, params.id)
  }
}
