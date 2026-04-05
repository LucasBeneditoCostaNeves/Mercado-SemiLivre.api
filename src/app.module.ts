import { Module } from '@nestjs/common';
import { userModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { authModule } from './infra/http/modules/auth/auth.module';

@Module({
  imports: [DatabaseModule, userModule, authModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
