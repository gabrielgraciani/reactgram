import { Router } from 'express';
import multer from 'multer';

import ensureAuthenticated from '../../../middlewares/ensureAuthenticated';
import uploadConfig from '../../../config/upload';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();
const upload = multer(uploadConfig);

usersRouter.get('/', usersController.index);
usersRouter.get('/:id', usersController.find);
usersRouter.post('/', upload.single('avatar'), usersController.create);
usersRouter.put('/:id', ensureAuthenticated, usersController.update);

export default usersRouter;
