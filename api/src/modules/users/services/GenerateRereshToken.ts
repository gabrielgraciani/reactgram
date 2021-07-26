import { getRepository } from 'typeorm';
import dayjs from 'dayjs';

import { RefreshToken } from '../models/RefreshToken';

export class GenerateRefreshToken {
  public async execute(userId: number): Promise<RefreshToken> {
    const refreshTokenRepository = getRepository(RefreshToken);

    const expiresIn = dayjs().add(60, 'second').unix();

    const generateRefreshToken = await refreshTokenRepository.create({
      user_id: userId,
      expires_in: expiresIn,
    });

    await refreshTokenRepository.save(generateRefreshToken);

    return generateRefreshToken;
  }
}
