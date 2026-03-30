import { Module } from '@nestjs/common';
import { userModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [DatabaseModule, userModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
