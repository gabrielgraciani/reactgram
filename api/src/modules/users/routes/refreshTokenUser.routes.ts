import { Router } from 'express';

import RefreshTokenUser from '../controllers/RefreshTokenUserController';

const sessionsRouter = Router();
const refreshTokenUser = new RefreshTokenUser();

sessionsRouter.post('/', refreshTokenUser.create);

export default sessionsRouter;
