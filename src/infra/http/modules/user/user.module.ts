import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MeAvatarController } from './meAvatar.controller';
import { MeUserController } from './meUser.controller';
import { CreateUserUseCase } from 'src/modules/user/useCases/createUserUseCase/createUserUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ListUserCase } from 'src/modules/user/useCases/listUserUseCase/listUserUseCase';
import { UpdateUserUseCase } from 'src/modules/user/useCases/updateUserUseCase/updateUserUseCase';
import { UploadAvatarUseCase } from 'src/modules/user/useCases/uploadAvatarUseCase/uploadAvatarUseCase';
import { RemoveAvatarUseCase } from 'src/modules/user/useCases/removeAvatarUseCase/removeAvatarUseCase';
import { GetCurrentUserUseCase } from 'src/modules/user/useCases/getCurrentUserUseCase/getCurrentUserUseCase';
import { UserAuthorizationPolicyImpl } from 'src/modules/user/policies/user-authorization.policy';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, MeAvatarController, MeUserController],
  providers: [
    CreateUserUseCase,
    ListUserCase,
    UserAuthorizationPolicyImpl,
    UpdateUserUseCase,
    UploadAvatarUseCase,
    RemoveAvatarUseCase,
    GetCurrentUserUseCase,
  ],
})
export class UserModule {}
