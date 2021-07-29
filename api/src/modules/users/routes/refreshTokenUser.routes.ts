import { Router } from 'express';

import RefreshTokenUserController from '../controllers/RefreshTokenUserController';

const sessionsRouter = Router();
const refreshTokenUser = new RefreshTokenUserController();

sessionsRouter.post('/', refreshTokenUser.create);

export default sessionsRouter;
