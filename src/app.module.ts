import { Module } from '@nestjs/common';
import { userModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.Guard';
import { ProfileModule } from './infra/http/modules/profile/profile.module';

@Module({
  imports: [DatabaseModule, userModule, AuthModule, ProfileModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule { }
