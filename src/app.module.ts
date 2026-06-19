import { Module } from '@nestjs/common'
import { UserModule } from './infra/http/modules/user/user.module'
import { DatabaseModule } from './infra/database/database.module'
import { AuthModule } from './infra/http/modules/auth/auth.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.Guard'
import { ProfileModule } from './infra/http/modules/profile/profile.module'
import { CategoryProductModule } from './infra/http/modules/categoryProduct/categoryProduct.module'
import { ProductModule } from './infra/http/modules/product/product.module'
import { ProductVariationModule } from './infra/http/modules/productVariation/productVariation.module'
import { PersonalDataModule } from './infra/http/modules/personalData/personalData.module'
import { AddressModule } from './infra/http/modules/address/address.module'

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, ProfileModule, CategoryProductModule, ProductModule, ProductVariationModule, PersonalDataModule, AddressModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule { }
