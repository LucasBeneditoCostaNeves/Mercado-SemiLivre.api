import { Controller, Get, Param, Query, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { Public } from '../auth/decorators/isPublic';
import { ListCatalogDepartmentsUseCase } from 'src/modules/catalog/useCases/listCatalogDepartments/ListCatalogDepartmentsUseCase';
import { ListCatalogProductsUseCase } from 'src/modules/catalog/useCases/listCatalogProducts/ListCatalogProductsUseCase';
import { GetProductDetailUseCase } from 'src/modules/catalog/useCases/getProductDetail/GetProductDetailUseCase';
import { GetProductReviewsUseCase } from 'src/modules/catalog/useCases/getProductReviews/GetProductReviewsUseCase';
import {
  GetProductDetailParamsDto,
  GetProductReviewsParamsDto,
  GetProductReviewsQueryDto,
  ListCatalogProductsQueryDto,
} from './dto/catalog.dto';

@Controller('catalog')
@UsePipes(ZodValidationPipe)
export class CatalogController {
  constructor(
    private listCatalogProductsUseCase: ListCatalogProductsUseCase,
    private listCatalogDepartmentsUseCase: ListCatalogDepartmentsUseCase,
    private getProductDetailUseCase: GetProductDetailUseCase,
    private getProductReviewsUseCase: GetProductReviewsUseCase,
  ) {}

  @Get('products')
  @Public()
  async listProducts(@Query() query: ListCatalogProductsQueryDto) {
    return this.listCatalogProductsUseCase.execute({
      limit: query.limit,
      skip: query.offset ?? query.skip,
      q: query.q,
      sort: query.sort,
      order: query.order,
      freeShipping: query.freeShipping === 'true',
      minPrice: query.minPrice,
      maxPrice: query.maxPrice,
      minRating: query.minRating,
      brand: query.brand ? query.brand.split(',') : undefined,
      category: query.category ? query.category.split(',') : undefined,
    });
  }

  @Get('products/:id')
  @Public()
  async getProductDetail(@Param() params: GetProductDetailParamsDto) {
    return this.getProductDetailUseCase.execute({ id: params.id });
  }

  @Get('products/:id/reviews')
  @Public()
  async getProductReviews(
    @Param() params: GetProductReviewsParamsDto,
    @Query() query: GetProductReviewsQueryDto,
  ) {
    return this.getProductReviewsUseCase.execute({
      productId: params.id,
      page: query.page,
      limit: query.limit,
      rating: query.rating,
      sort: query.sort,
    });
  }

  @Get('departments')
  @Public()
  async listDepartments() {
    return this.listCatalogDepartmentsUseCase.execute();
  }
}
