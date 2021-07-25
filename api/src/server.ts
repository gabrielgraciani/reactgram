import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import './database';
import routes from './routes';
import AppError from './errors/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'Error',
    message: `Internal server error - ${err.message}`,
  });
});

dotenv.config();

app.listen(process.env.PORT || 3333, () => console.log('Server is running!'));
