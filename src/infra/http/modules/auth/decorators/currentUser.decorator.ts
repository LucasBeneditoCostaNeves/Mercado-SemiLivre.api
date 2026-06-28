import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { AuthenticatedUser, AuthRequestModel } from '../models/authRequestModel'

export const CurrentUser = createParamDecorator(
    (_: unknown, ctx: ExecutionContext): AuthenticatedUser => {
        const request = ctx.switchToHttp().getRequest<AuthRequestModel>()
        return request.user
    },
)
