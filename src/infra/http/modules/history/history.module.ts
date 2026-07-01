import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { HistoryController } from './history.controller'
import { HistoryService } from './history.service'

@Module({
  imports: [DatabaseModule],
  controllers: [HistoryController],
  providers: [HistoryService],
})
export class HistoryModule {}
