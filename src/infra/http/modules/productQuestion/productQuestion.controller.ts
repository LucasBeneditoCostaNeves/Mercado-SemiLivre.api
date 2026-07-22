import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { Public } from '../auth/decorators/isPublic'
import { CurrentUser } from '../auth/decorators/currentUser.decorator'
import type { AuthenticatedUser } from '../auth/models/authRequestModel'
import { SellerProfileGuard } from '../auth/guards/sellerProfile.guard'
import { ProductQuestionService } from './productQuestion.service'
import {
    AskProductQuestionBodyDto,
    ProductIdParamsDto,
    AnswerProductQuestionBodyDto,
    QuestionIdParamsDto,
    ListSellerQuestionsQueryDto,
} from './dto/productQuestion.dto'

@Controller()
@UsePipes(ZodValidationPipe)
export class ProductQuestionController {
    constructor(private productQuestionService: ProductQuestionService) {}

    @Post('product/:id/questions')
    ask(
        @CurrentUser() user: AuthenticatedUser,
        @Param() params: ProductIdParamsDto,
        @Body() body: AskProductQuestionBodyDto,
    ) {
        return this.productQuestionService.ask(params.id, user.id, body.question)
    }

    @Public()
    @Get('product/:id/questions')
    listAnswered(@Param() params: ProductIdParamsDto) {
        return this.productQuestionService.listAnswered(params.id)
    }

    @Get('product/:id/questions/mine')
    listMine(@CurrentUser() user: AuthenticatedUser, @Param() params: ProductIdParamsDto) {
        return this.productQuestionService.listMine(params.id, user.id)
    }

    @Get('fornecedor/questions')
    @UseGuards(SellerProfileGuard)
    listForSeller(@CurrentUser() user: AuthenticatedUser, @Query() query: ListSellerQuestionsQueryDto) {
        return this.productQuestionService.listForSeller(user.id, query.status)
    }

    @Patch('product-questions/:id/answer')
    @UseGuards(SellerProfileGuard)
    answer(
        @CurrentUser() user: AuthenticatedUser,
        @Param() params: QuestionIdParamsDto,
        @Body() body: AnswerProductQuestionBodyDto,
    ) {
        return this.productQuestionService.answer(params.id, user.id, body.answer)
    }
}
