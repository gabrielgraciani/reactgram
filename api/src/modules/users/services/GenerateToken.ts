import { sign } from 'jsonwebtoken';

import authConfig from '../../../config/auth';

export class GenerateToken {
  public async execute(userId: number): Promise<string> {
    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(userId),
      expiresIn,
    });

    return token;
  }
}
