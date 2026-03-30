import { Module } from "@nestjs/common";
import { UserRepository } from "src/modules/user/reposiories/UserRepository";
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserReposiory";
import { PrismaService } from "./prisma/prisma.service";

@Module({
    providers: [
        PrismaService,
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        }
    ],

    exports: [UserRepository]
})

export class DatabaseModule { }