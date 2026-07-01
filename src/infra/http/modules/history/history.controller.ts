import { Body, Controller, Get, HttpCode, Post, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { CurrentUser } from '../auth/decorators/currentUser.decorator'
import type { AuthenticatedUser } from '../auth/models/authRequestModel'
import { RecordProductClickDto, RecordSearchDto } from './dto/history.dto'
import { HistoryService } from './history.service'

@Controller('history')
@UsePipes(ZodValidationPipe)
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  @Post('search')
  @HttpCode(200)
  async recordSearch(
    @CurrentUser() user: AuthenticatedUser,
    @Body() body: RecordSearchDto,
  ) {
    const result = await this.historyService.recordSearch(user.id, body.term)
    return { status: result.created ? 'created' : 'deduplicated' }
  }

  @Post('product-click')
  @HttpCode(201)
  recordProductClick(
    @CurrentUser() user: AuthenticatedUser,
    @Body() body: RecordProductClickDto,
  ) {
    return this.historyService.recordProductClick(user.id, body.productId, body.sourcePage)
  }

  @Get('searches')
  getSearchHistory(@CurrentUser() user: AuthenticatedUser) {
    return this.historyService.getSearchHistory(user.id)
  }
}
