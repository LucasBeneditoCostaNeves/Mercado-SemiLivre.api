import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'
import { AuthRequestModel } from '../models/authRequestModel'

@Injectable()
export class AdminProfileGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<AuthRequestModel>()
        const adminProfileId = process.env.ADMIN_PROFILE_ID

        if (!adminProfileId || request.user.profileId !== adminProfileId) {
            throw new ForbiddenException('Acesso restrito a administradores.')
        }

        return true
    }
}
