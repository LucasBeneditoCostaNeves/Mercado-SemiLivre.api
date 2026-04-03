
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/modules/user/entities/User';
import { compare } from 'bcrypt';
import { UserRepository } from 'src/modules/user/reposiories/UserRepository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(useRepository: UserRepository) {
        useRepository = useRepository
        super({
            usernameField: "email"
        });
    }

    async validate(email: string, password: string): Promise<any> {

        const passwordIsValide = await compare(email, password);
        if (!passwordIsValide) {
            throw new UnauthorizedException();
        }



    }
}
