import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import { ZodValidationException } from 'nestjs-zod';
import { ZodError } from 'zod';
import { ProductNotFoundError } from 'src/domain/errors/product/ProductNotFoundError';
import { ProductForbiddenError } from 'src/domain/errors/product/ProductForbiddenError';
import { ProductVariationNotFoundError } from 'src/domain/errors/product/ProductVariationNotFoundError';
import { NoFieldsToUpdateError } from 'src/domain/errors/NoFieldsToUpdateError';
import { EmailAlreadyInUseError } from 'src/domain/errors/user/EmailAlreadyInUseError';
import { UserNotFoundError } from 'src/domain/errors/user/UserNotFoundError';
import { PersonalDataAlreadyExistsError } from 'src/domain/errors/personalData/PersonalDataAlreadyExistsError';
import { PersonalDataNotFoundError } from 'src/domain/errors/personalData/PersonalDataNotFoundError';
import { AddressNotFoundError } from 'src/domain/errors/address/AddressNotFoundError';
import { AddressForbiddenError } from 'src/domain/errors/address/AddressForbiddenError';
import { ShippingQuoteUnavailableError } from 'src/domain/errors/shipping/ShippingQuoteUnavailableError';
import { CheckoutSessionCreationError } from 'src/domain/errors/order/CheckoutSessionCreationError';
import { OrderNotFoundError } from 'src/domain/errors/order/OrderNotFoundError';
import { InvalidWebhookSignatureError } from 'src/domain/errors/order/InvalidWebhookSignatureError';
import { OrderItemForbiddenError } from 'src/domain/errors/order/OrderItemForbiddenError';
import { InvalidFulfillmentTransitionError } from 'src/domain/errors/order/InvalidFulfillmentTransitionError';
import { OrderItemReviewAlreadyExistsError } from 'src/domain/errors/order/OrderItemReviewAlreadyExistsError';

@Catch()
export class DomainExceptionFilter implements ExceptionFilter {
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (error instanceof ProductNotFoundError) {
      return response.status(404).json({ message: error.message });
    }
    if (error instanceof ProductForbiddenError) {
      return response.status(403).json({ message: error.message });
    }
    if (error instanceof ProductVariationNotFoundError) {
      return response.status(404).json({ message: error.message });
    }
    if (error instanceof NoFieldsToUpdateError) {
      return response.status(400).json({ message: error.message });
    }
    if (error instanceof EmailAlreadyInUseError) {
      return response.status(409).json({ message: error.message });
    }
    if (error instanceof UserNotFoundError) {
      return response.status(404).json({ message: error.message });
    }
    if (error instanceof PersonalDataAlreadyExistsError) {
      return response.status(409).json({ message: error.message });
    }
    if (error instanceof PersonalDataNotFoundError) {
      return response.status(404).json({ message: error.message });
    }
    if (error instanceof AddressNotFoundError) {
      return response.status(404).json({ message: error.message });
    }
    if (error instanceof AddressForbiddenError) {
      return response.status(403).json({ message: error.message });
    }
    if (error instanceof ShippingQuoteUnavailableError) {
      return response.status(503).json({ message: error.message });
    }
    if (error instanceof CheckoutSessionCreationError) {
      return response.status(502).json({ message: error.message });
    }
    if (error instanceof OrderNotFoundError) {
      return response.status(404).json({ message: error.message });
    }
    if (error instanceof InvalidWebhookSignatureError) {
      return response.status(400).json({ message: error.message });
    }
    if (error instanceof OrderItemForbiddenError) {
      return response.status(403).json({ message: error.message });
    }
    if (error instanceof InvalidFulfillmentTransitionError) {
      return response.status(409).json({ message: error.message });
    }
    if (error instanceof OrderItemReviewAlreadyExistsError) {
      return response.status(409).json({ message: error.message });
    }

    if (error instanceof ZodValidationException) {
      const zodErr = error.getZodError();
      const errors = zodErr instanceof ZodError ? zodErr.flatten() : zodErr;
      return response.status(400).json({
        message: 'Validation failed',
        errors,
        statusCode: 400,
      });
    }

    if (error instanceof HttpException) {
      const status = error.getStatus();
      const payload = error.getResponse();
      const body = typeof payload === 'string' ? { message: payload } : payload;
      return response.status(status).json(body);
    }

    if (error instanceof UnauthorizedException) {
      return response
        .status(401)
        .json({ message: 'Token inválido ou expirado' });
    }

    console.log(error);

    return response.status(500).json({ message: 'Erro interno do servidor' });
  }
}
