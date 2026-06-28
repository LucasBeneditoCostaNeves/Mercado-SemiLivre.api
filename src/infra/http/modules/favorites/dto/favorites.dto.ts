import { createZodDto } from 'nestjs-zod'
import {
  addFavoriteSchema,
  favoriteParamsSchema,
  listFavoritesQuerySchema,
} from '../schemas/favorites.schemas'

export class AddFavoriteDto extends createZodDto(addFavoriteSchema) {}
export class FavoriteParamsDto extends createZodDto(favoriteParamsSchema) {}
export class ListFavoritesQueryDto extends createZodDto(listFavoritesQuerySchema) {}
