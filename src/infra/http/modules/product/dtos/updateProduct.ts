import { IsBoolean, IsOptional, IsString } from "class-validator"

export class UpdateProductBody {
    @IsString()
    @IsOptional()
    name?: string

    @IsBoolean()
    @IsOptional()
    status?: boolean
}