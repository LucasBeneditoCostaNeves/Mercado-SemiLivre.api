import { IsBoolean, IsEmail, isNotEmpty, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserBody {
    @IsString()
    @IsNotEmpty()
    name: string;
}