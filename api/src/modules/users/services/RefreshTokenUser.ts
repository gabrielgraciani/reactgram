import { getRepository } from 'typeorm';

import AppError from '../../../errors/AppError';

import { GenerateToken } from './GenerateToken';

import { RefreshToken } from '../models/RefreshToken';

export class RefreshTokenUser {
  public async execute(refreshTokenId: number): Promise<string> {
    const refreshTokenRepository = getRepository(RefreshToken);

    const refreshToken = await refreshTokenRepository.findOne({
      id: refreshTokenId,
    });

    if (!refreshToken) {
      throw new AppError('Refresh token invalid', 404);
    }

    const generateToken = new GenerateToken();
    const token = await generateToken.execute(refreshToken.user_id);

    return token;
  }
}
