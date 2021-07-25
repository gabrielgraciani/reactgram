import { getCustomRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import UsersRepository from '../repositories/UsersRepository';
import { User } from '../models/User';

interface Request {
  id: string;
  name: string;
  email: string;
  password: string;
  username: string;
  biography?: string;
  telephone?: string;
  avatar?: string;
}

class UpdatePostService {
  public async execute({
    id,
    name,
    email,
    password,
    username,
    biography,
    telephone,
    avatar,
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({
      id: parseInt(id, 10),
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const checkEmailExists = await usersRepository.findByEmail(email);

    if (checkEmailExists && checkEmailExists.id !== user.id) {
      throw new AppError('This email is already used');
    }

    const checkUsernameExists = await usersRepository.findByUsername(username);

    if (checkUsernameExists && checkUsernameExists.id !== user.id) {
      throw new AppError('This username is already used');
    }

    user.name = name;
    user.email = email;
    user.password = password;
    user.username = username;
    user.biography = biography;
    user.telephone = telephone;
    user.avatar = avatar;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdatePostService;
