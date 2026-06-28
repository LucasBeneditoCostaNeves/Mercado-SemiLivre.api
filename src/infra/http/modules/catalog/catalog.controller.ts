import { Controller, Get, Query, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { Public } from '../auth/decorators/isPublic'
import { ListCatalogDepartmentsUseCase } from 'src/modules/catalog/useCases/listCatalogDepartments/ListCatalogDepartmentsUseCase'
import { ListCatalogProductsUseCase } from 'src/modules/catalog/useCases/listCatalogProducts/ListCatalogProductsUseCase'
import { ListCatalogProductsQueryDto } from './dto/catalog.dto'

@Controller('catalog')
@UsePipes(ZodValidationPipe)
export class CatalogController {
  constructor(
    private listCatalogProductsUseCase: ListCatalogProductsUseCase,
    private listCatalogDepartmentsUseCase: ListCatalogDepartmentsUseCase,
  ) {}

  @Get('products')
  @Public()
  async listProducts(@Query() query: ListCatalogProductsQueryDto) {
    return this.listCatalogProductsUseCase.execute({
      limit: query.limit,
      skip: query.skip,
    })
  }

  @Get('departments')
  @Public()
  async listDepartments() {
    return this.listCatalogDepartmentsUseCase.execute()
  }
}
