import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateProductBody {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    category_product_id: string

    @IsString()
    @IsNotEmpty()
    seller_user_id: string

    @IsBoolean()
    @IsNotEmpty()
    status: boolean
}