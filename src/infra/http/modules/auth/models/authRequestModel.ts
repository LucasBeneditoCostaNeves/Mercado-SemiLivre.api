import type { User } from "@prisma/client";
import type { Request } from "express";

export interface AuthRequestModel extends Request {
    user: User;
}
