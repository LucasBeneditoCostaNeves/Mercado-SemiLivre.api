import { Injectable } from '@nestjs/common';
import { UserNotFoundError } from 'src/domain/errors/user/UserNotFoundError';
import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';

export interface IGetCurrentUserUseCaseRequest {
  userId: string;
}

@Injectable()
export class GetCurrentUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ userId }: IGetCurrentUserUseCaseRequest): Promise<User> {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new UserNotFoundError();

    return user;
  }
}
