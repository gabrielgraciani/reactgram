import { getRepository } from 'typeorm';
import dayjs from 'dayjs';

import AppError from '../../../errors/AppError';

import { GenerateToken } from './GenerateToken';
import { GenerateRefreshToken } from './GenerateRereshToken';

import { RefreshToken } from '../models/RefreshToken';

interface Response {
  token: string;
  refreshToken?: RefreshToken;
}

export class RefreshTokenUser {
  public async execute(refreshTokenId: number): Promise<Response> {
    const refreshTokenRepository = getRepository(RefreshToken);

    const refreshToken = await refreshTokenRepository.findOne({
      id: refreshTokenId,
    });

    if (!refreshToken) {
      throw new AppError('Refresh token invalid', 404);
    }

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expires_in),
    );

    const generateToken = new GenerateToken();
    const token = await generateToken.execute(refreshToken.user_id);

    if (refreshTokenExpired) {
      await refreshTokenRepository.delete({ user_id: refreshToken.user_id });

      const generateRefreshToken = new GenerateRefreshToken();
      const newRefreshToken = await generateRefreshToken.execute(
        refreshToken.user_id,
      );

      return { token, refreshToken: newRefreshToken };
    }

    return { token };
  }
}
