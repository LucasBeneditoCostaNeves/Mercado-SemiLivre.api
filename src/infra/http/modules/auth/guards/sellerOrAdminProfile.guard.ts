import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'
import { AuthRequestModel } from '../models/authRequestModel'

@Injectable()
export class SellerOrAdminProfileGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<AuthRequestModel>()
        const sellerProfileId = process.env.SELLER_PROFILE_ID
        const adminProfileId = process.env.ADMIN_PROFILE_ID
        const profileId = request.user.profileId

        const isSeller = !!sellerProfileId && profileId === sellerProfileId
        const isAdmin = !!adminProfileId && profileId === adminProfileId

        if (!isSeller && !isAdmin) {
            throw new ForbiddenException('Acesso restrito a fornecedores ou administradores.')
        }

        return true
    }
}
