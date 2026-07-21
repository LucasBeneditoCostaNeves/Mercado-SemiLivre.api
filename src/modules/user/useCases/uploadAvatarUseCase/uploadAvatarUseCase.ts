import { Injectable } from '@nestjs/common';
import { UserNotFoundError } from 'src/domain/errors/user/UserNotFoundError';
import { UserRepository } from '../../repositories/UserRepository';
import { deleteAvatarFile } from 'src/infra/http/modules/user/config/deleteAvatarFile';

export interface IUploadAvatarUseCaseRequest {
  userId: string;
  avatarUrl: string;
}

@Injectable()
export class UploadAvatarUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    userId,
    avatarUrl,
  }: IUploadAvatarUseCaseRequest): Promise<{ avatarUrl: string }> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new UserNotFoundError();

    const previousAvatarUrl = user.avatarUrl;
    await this.userRepository.update({ id: userId, avatarUrl });

    if (previousAvatarUrl) {
      deleteAvatarFile(previousAvatarUrl);
    }

    return { avatarUrl };
  }
}
