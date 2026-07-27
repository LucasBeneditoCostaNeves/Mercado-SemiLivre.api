import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { ProductQuestionController } from './productQuestion.controller'
import { ProductQuestionService } from './productQuestion.service'

@Module({
    imports: [DatabaseModule],
    controllers: [ProductQuestionController],
    providers: [ProductQuestionService],
})
export class ProductQuestionModule {}
