import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common'
import { AuthRequestModel } from '../models/authRequestModel'

@Injectable()
export class SellerProfileGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<AuthRequestModel>()
        const sellerProfileId = process.env.SELLER_PROFILE_ID

        if (!sellerProfileId || request.user.profileId !== sellerProfileId) {
            throw new ForbiddenException('Acesso restrito a fornecedores.')
        }

        return true
    }
}
