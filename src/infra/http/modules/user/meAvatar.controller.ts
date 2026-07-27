import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RemoveAvatarUseCase } from 'src/modules/user/useCases/removeAvatarUseCase/removeAvatarUseCase';
import { UploadAvatarUseCase } from 'src/modules/user/useCases/uploadAvatarUseCase/uploadAvatarUseCase';
import { CurrentUser } from '../auth/decorators/currentUser.decorator';
import type { AuthenticatedUser } from '../auth/models/authRequestModel';
import { avatarUploadMulterOptions } from './config/avatarUpload.multer';

@Controller('me/avatar')
export class MeAvatarController {
  constructor(
    private uploadAvatarUseCase: UploadAvatarUseCase,
    private removeAvatarUseCase: RemoveAvatarUseCase,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('avatar', avatarUploadMulterOptions))
  async upload(
    @CurrentUser() user: AuthenticatedUser,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado.');
    }

    const avatarUrl = `/uploads/avatars/${file.filename}`;

    return this.uploadAvatarUseCase.execute({ userId: user.id, avatarUrl });
  }

  @Delete()
  @HttpCode(204)
  async remove(@CurrentUser() user: AuthenticatedUser) {
    await this.removeAvatarUseCase.execute({ userId: user.id });
  }
}
