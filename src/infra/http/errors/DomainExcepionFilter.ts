import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    UnauthorizedException,
} from "@nestjs/common"
import { ZodValidationException } from "nestjs-zod"
import { ZodError } from "zod"
import { ProductNotFoundError } from "src/domain/errors/product/ProductNotFoundError"
import { NoFieldsToUpdateError } from "src/domain/errors/NoFieldsToUpdateError"
import { EmailAlreadyInUseError } from "src/domain/errors/user/EmailAlreadyInUseError"

@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
    catch(error: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()

        if (error instanceof ProductNotFoundError) {
            return response.status(404).json({ message: error.message })
        }
        if (error instanceof NoFieldsToUpdateError) {
            return response.status(400).json({ message: error.message })
        }
        if (error instanceof EmailAlreadyInUseError) {
            return response.status(409).json({ message: error.message })
        }

        if (error instanceof ZodValidationException) {
            const zodErr = error.getZodError()
            const errors =
                zodErr instanceof ZodError ? zodErr.flatten() : zodErr
            return response.status(400).json({
                message: "Validation failed",
                errors,
                statusCode: 400,
            })
        }

        if (error instanceof HttpException) {
            const status = error.getStatus()
            const payload = error.getResponse()
            const body =
                typeof payload === "string"
                    ? { message: payload }
                    : payload
            return response.status(status).json(body)
        }

        if (error instanceof UnauthorizedException) {
            return response.status(401).json({ message: "Token inválido ou expirado" })
        }

        console.log(error)

        return response.status(500).json({ message: "Erro interno do servidor" })
    }
}