import type { User } from "@prisma/client";
import type { Request } from "express";

/** Dados em request.user após JwtStrategy (sub → id). */
export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    createdAt: string;
    profileId: string;
}

export interface AuthRequestModel extends Request {
    user: AuthenticatedUser;
}

/** request.user após LocalStrategy (utilizador completo da BD). */
export interface LocalAuthRequestModel extends Request {
    user: User;
}
