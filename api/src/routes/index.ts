import { Router } from 'express';

import usersRouter from '../modules/users/routes/users.routes';
import sessionsRouter from '../modules/users/routes/sessions.routes';
import refreshTokenUserRouter from '../modules/users/routes/refreshTokenUser.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/refresh-token', refreshTokenUserRouter);

export default routes;
