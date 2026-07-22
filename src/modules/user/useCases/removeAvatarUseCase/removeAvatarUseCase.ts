import { Injectable } from '@nestjs/common';
import { UserNotFoundError } from 'src/domain/errors/user/UserNotFoundError';
import { deleteAvatarFile } from 'src/infra/http/modules/user/config/deleteAvatarFile';
import { UserRepository } from '../../repositories/UserRepository';

export interface IRemoveAvatarUseCaseRequest {
  userId: string;
}

@Injectable()
export class RemoveAvatarUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ userId }: IRemoveAvatarUseCaseRequest): Promise<void> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new UserNotFoundError();

    if (!user.avatarUrl) return;

    await this.userRepository.update({ id: userId, avatarUrl: null });
    deleteAvatarFile(user.avatarUrl);
  }
}
