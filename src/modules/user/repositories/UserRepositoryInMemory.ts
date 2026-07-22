import { User } from '../entities/User';
import { UserRepository } from './UserRepository';

export interface IUserUpdateDTO {
  id: string;
  name?: string;
  email?: string;
  status?: boolean;
  avatarUrl?: string | null;
}

export class UserRepositoryInMemory implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return user ?? null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((user) => user.email == email);

    if (!user) {
      return null;
    }

    return user;
  }

  async findMany(): Promise<User[]> {
    return this.users;
  }

  async update(datatUser: IUserUpdateDTO) {
    const userSelected = this.users.find((user) => user.id === datatUser.id);

    if (!userSelected) {
      throw new Error('User not found');
    }

    userSelected.name = datatUser.name || userSelected.name;
    userSelected.email = datatUser.email || userSelected.email;
    userSelected.status = datatUser.status || userSelected.status;
    if (datatUser.avatarUrl !== undefined) {
      userSelected.avatarUrl = datatUser.avatarUrl;
    }
  }

  async exisByEmail(email: string): Promise<boolean> {
    return this.users.some((user) => user.email === email);
  }
}
