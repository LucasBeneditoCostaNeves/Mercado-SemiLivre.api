import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { PrismaCatalogRepository } from 'src/infra/database/prisma/repositories/PrismaCatalogRepository'
import { CatalogRepository } from 'src/modules/catalog/repositories/CatalogRepository'
import { ListCatalogDepartmentsUseCase } from 'src/modules/catalog/useCases/listCatalogDepartments/ListCatalogDepartmentsUseCase'
import { ListCatalogProductsUseCase } from 'src/modules/catalog/useCases/listCatalogProducts/ListCatalogProductsUseCase'
import { CatalogController } from './catalog.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [CatalogController],
  providers: [
    ListCatalogProductsUseCase,
    ListCatalogDepartmentsUseCase,
    {
      provide: CatalogRepository,
      useClass: PrismaCatalogRepository,
    },
  ],
})
export class CatalogModule {}
