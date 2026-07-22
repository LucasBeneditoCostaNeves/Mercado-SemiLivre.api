import { User } from '../entities/User';

export interface IUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  status: boolean;
  profileId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdateDTO {
  id: string;
  name?: string;
  email?: string;
  status?: boolean;
  avatarUrl?: string | null;
}

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findMany(): Promise<IUserDTO[]>;
  abstract update(user: IUserUpdateDTO): Promise<void>;
  abstract exisByEmail(email: string): Promise<boolean>;
}
