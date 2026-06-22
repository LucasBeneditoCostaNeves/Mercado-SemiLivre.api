import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { SeedCatalogUseCase } from 'src/modules/seed/useCases/seedCatalogUseCase/seedCatalogUseCase'
import { SeedController } from './seed.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [SeedController],
  providers: [SeedCatalogUseCase],
})
export class SeedModule {}
