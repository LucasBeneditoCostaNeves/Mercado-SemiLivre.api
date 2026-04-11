import { IsBoolean, IsEmail, isNotEmpty, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class UpdateUserBody {
    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsBoolean()
    status?: boolean
}