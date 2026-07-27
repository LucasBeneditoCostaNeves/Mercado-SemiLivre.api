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
import { SeedModule } from './infra/http/modules/seed/seed.module'
import { CatalogModule } from './infra/http/modules/catalog/catalog.module'
import { CartModule } from './infra/http/modules/cart/cart.module'
import { FavoritesModule } from './infra/http/modules/favorites/favorites.module'
import { HistoryModule } from './infra/http/modules/history/history.module'
import { HealthModule } from './infra/http/modules/health/health.module'
import { ShippingModule } from './infra/http/modules/shipping/shipping.module'
import { OrderModule } from './infra/http/modules/order/order.module'
import { BrandModule } from './infra/http/modules/brand/brand.module'
import { ProductQuestionModule } from './infra/http/modules/productQuestion/productQuestion.module'
import { CouponModule } from './infra/http/modules/coupon/coupon.module'

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, ProfileModule, CategoryProductModule, ProductModule, ProductVariationModule, PersonalDataModule, AddressModule, SeedModule, CatalogModule, CartModule, FavoritesModule, HistoryModule, HealthModule, ShippingModule, OrderModule, BrandModule, ProductQuestionModule, CouponModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule { }
