import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common"
import { ProductNotFoundError } from "src/domain/errors/product/ProductNotFoundError"
import { NoFieldsToUpdateError } from "src/domain/errors/NoFieldsToUpdateError"
import { EmailAlreadyInUseError } from "src/domain/errors/user/EmailAlreadyInUseError"

@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
    catch(error: Error | any, host: ArgumentsHost) {
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

        if (error?.status == 401) {
            return response.status(401).json({ message: "Token inválido ou expirado" })
        }

        return response.status(500).json({ message: "Erro interno do servidor" })
    }
}