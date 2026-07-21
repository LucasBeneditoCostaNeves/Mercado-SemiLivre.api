import { Controller, Get } from '@nestjs/common';
import { GetCurrentUserUseCase } from 'src/modules/user/useCases/getCurrentUserUseCase/getCurrentUserUseCase';
import { CurrentUser } from '../auth/decorators/currentUser.decorator';
import type { AuthenticatedUser } from '../auth/models/authRequestModel';

@Controller('me')
export class MeUserController {
  constructor(private getCurrentUserUseCase: GetCurrentUserUseCase) {}

  @Get()
  async get(@CurrentUser() user: AuthenticatedUser) {
    const currentUser = await this.getCurrentUserUseCase.execute({
      userId: user.id,
    });

    return {
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      avatarUrl: currentUser.avatarUrl,
    };
  }
}
