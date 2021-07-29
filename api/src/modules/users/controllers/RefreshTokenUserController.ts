import { Request, Response } from 'express';

import { RefreshTokenUser } from '../services/RefreshTokenUser';

export default class RefreshTokenUserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { refresh_token } = request.body;

    const refreshTokenUser = new RefreshTokenUser();
    const token = await refreshTokenUser.execute(refresh_token);

    return response.json(token);
  }
}
