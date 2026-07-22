import { Body, Controller, Get, Post, UseGuards, UsePipes } from '@nestjs/common'
import { ZodValidationPipe } from 'nestjs-zod'
import { BrandService } from './brand.service'
import { CreateBrandBodyDto } from './dto/brand.dto'
import { SellerProfileGuard } from '../auth/guards/sellerProfile.guard'

@Controller('brand')
@UsePipes(ZodValidationPipe)
export class BrandController {
    constructor(private brandService: BrandService) {}

    @Get()
    list() {
        return this.brandService.listMany()
    }

    @Post()
    @UseGuards(SellerProfileGuard)
    create(@Body() body: CreateBrandBodyDto) {
        return this.brandService.create(body.name)
    }
}
