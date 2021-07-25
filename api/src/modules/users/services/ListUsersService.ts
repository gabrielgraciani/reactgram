import { getRepository } from 'typeorm';

import { User } from '../models/User';

class ListUsersService {
  public async execute(): Promise<Omit<User, 'password'>[]> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    users.forEach(user => {
      delete user.password;
    });

    return users;
  }
}

export default ListUsersService;
