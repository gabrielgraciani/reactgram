import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import UsersRepository from '../repositories/UsersRepository';
import { User } from '../models/User';
import AppError from '../../../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string;
  username: string;
  biography?: string;
  telephone?: string;
  avatar?: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    username,
    biography,
    telephone,
    avatar,
  }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const checkEmailExists = await usersRepository.findByEmail(email);

    if (checkEmailExists) {
      throw new AppError('This email is already used');
    }

    const checkUsernameExists = await usersRepository.findByUsername(username);

    if (checkUsernameExists) {
      throw new AppError('This username is already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = await usersRepository.create({
      name,
      email,
      password: hashedPassword,
      username,
      biography,
      telephone,
      avatar,
    });

    await usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export default CreateUserService;
