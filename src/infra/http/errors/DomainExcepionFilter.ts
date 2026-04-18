import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common"
import { ProductNotFoundError } from "src/domain/errors/product/ProductNotFoundError"
import { NoFieldsToUpdateError } from "src/domain/errors/NoFieldsToUpdateError"

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

        return response.status(500).json({ message: "Erro interno do servidor" })
    }
}