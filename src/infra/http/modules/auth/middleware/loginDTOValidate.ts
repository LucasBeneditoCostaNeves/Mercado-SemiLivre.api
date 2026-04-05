import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { LoginBody } from "../dtos/LoginBody";
import { validate } from "class-validator";

@Injectable()
export class LoginDTOValidateMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        const body = req.body

        const loginBody = new LoginBody()
        loginBody.email = body.email
        loginBody.password = body.password

        const validations = await validate(loginBody)

        if (validations.length) {
            throw new BadRequestException(validations)
        }

        next()
    }
}