import { IsBoolean, IsEmail, isNotEmpty, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserBody {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5, {
        message: 'Password is too short',
    })
    password: string


    @IsBoolean()
    @IsNotEmpty()
    status: boolean

    @IsNotEmpty()
    @IsString()
    profileId: string
}