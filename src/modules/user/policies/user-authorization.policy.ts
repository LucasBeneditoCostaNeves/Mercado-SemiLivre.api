import { ForbiddenException, Injectable } from "@nestjs/common"

export type ActorContext = {
    id: string
    profileId: string
}

export interface UserAuthorizationPolicy {
    assertCanUpdate(actor: ActorContext, targetUserId: string): void
}

@Injectable()
export class UserAuthorizationPolicyImpl implements UserAuthorizationPolicy {
    assertCanUpdate(actor: ActorContext, targetUserId: string): void {
        if (actor.id === targetUserId) {
            return
        }

        const adminProfileId = process.env.ADMIN_PROFILE_ID
        if (adminProfileId && actor.profileId === adminProfileId) {
            return
        }

        throw new ForbiddenException(
            "Sem permissão para atualizar essa rota.",
        )
    }
}
