import { Transform } from "class-transformer"
import { IsBoolean, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator"

export class UpdateProductBody {
    @IsString()
    @IsOptional()
    @MinLength(1)
    @MaxLength(255, {
        message: 'Name must be less than 255 characters'
    })
    @Transform(({ value }) => value?.trim())
    name?: string

    @IsBoolean()
    @IsOptional()
    status?: boolean
}

export class UpdateProductParams {
    @IsUUID()
    id!: string
}