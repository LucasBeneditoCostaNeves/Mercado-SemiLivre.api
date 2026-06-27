import { Controller, Get, Param, Query, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { Public } from '../auth/decorators/isPublic'
import { ListCatalogDepartmentsUseCase } from 'src/modules/catalog/useCases/listCatalogDepartments/ListCatalogDepartmentsUseCase'
import { ListCatalogProductsUseCase } from 'src/modules/catalog/useCases/listCatalogProducts/ListCatalogProductsUseCase'
import { GetProductDetailUseCase } from 'src/modules/catalog/useCases/getProductDetail/GetProductDetailUseCase'
import { GetProductDetailParamsDto, ListCatalogProductsQueryDto } from './dto/catalog.dto'

@Controller('catalog')
@UsePipes(ZodValidationPipe)
export class CatalogController {
  constructor(
    private listCatalogProductsUseCase: ListCatalogProductsUseCase,
    private listCatalogDepartmentsUseCase: ListCatalogDepartmentsUseCase,
    private getProductDetailUseCase: GetProductDetailUseCase,
  ) {}

  @Get('products')
  @Public()
  async listProducts(@Query() query: ListCatalogProductsQueryDto) {
    return this.listCatalogProductsUseCase.execute({
      limit: query.limit,
      skip: query.skip,
    })
  }

  @Get('products/:id')
  @Public()
  async getProductDetail(@Param() params: GetProductDetailParamsDto) {
    return this.getProductDetailUseCase.execute({ id: params.id })
  }

  @Get('departments')
  @Public()
  async listDepartments() {
    return this.listCatalogDepartmentsUseCase.execute()
  }
}
