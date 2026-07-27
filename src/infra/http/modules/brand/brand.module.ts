import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/infra/database/database.module'
import { BrandController } from './brand.controller'
import { BrandService } from './brand.service'

@Module({
    imports: [DatabaseModule],
    controllers: [BrandController],
    providers: [BrandService],
})
export class BrandModule {}
