import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import AppError from '../../../errors/AppError';
import { User } from '../models/User';
import { RefreshToken } from '../models/RefreshToken';

import { GenerateToken } from './GenerateToken';
import { GenerateRefreshToken } from './GenerateRereshToken';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: Omit<User, 'password'>;
  token: string;
  refreshToken: RefreshToken;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);
    const refreshTokenRepository = getRepository(RefreshToken);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const generateToken = new GenerateToken();
    const token = await generateToken.execute(user.id);

    await refreshTokenRepository.delete({ user_id: user.id });

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(user.id);

    delete user.password;

    return {
      user,
      token,
      refreshToken,
    };
  }
}

export default AuthenticateUserService;
