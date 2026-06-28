import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { Public } from '../auth/decorators/isPublic'
import { SeedCatalogUseCase } from 'src/modules/seed/useCases/seedCatalogUseCase/seedCatalogUseCase'
import { SeedCatalogBodyDto } from './dtos/seedCatalog.dto'

@Controller('seed')
@UsePipes(ZodValidationPipe)
export class SeedController {
  constructor(private seedCatalogUseCase: SeedCatalogUseCase) {}

  @Post('catalog')
  @HttpCode(201)
  @Public()
  async seedCatalog(@Body() body: SeedCatalogBodyDto) {
    const inserted = await this.seedCatalogUseCase.execute(body.products)
    return { inserted }
  }
}
