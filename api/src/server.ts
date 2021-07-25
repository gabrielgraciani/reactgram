import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 3333, () => console.log('Server is running!'));