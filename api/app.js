import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { signUp } from './routes/auth/sign-up.js';
import { login } from './routes/auth/login.js';
import { refresh } from './routes/auth/refresh.js';
import { profile } from './routes/profile/index.js';
import {
  hasValidAccessToken,
  hasValidRefreshToken,
} from './middlewares/session.middlewares.js';

export const app = express();

// Middlewares
app.use(
  cors({
    credentials: true,
    origin: 'https://pchaparro-platzi-node-auth.netlify.app',
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API
app.use('/api/v1/sign-up', signUp);
app.use('/api/v1/login', login);
app.use('/api/v1/refresh', hasValidRefreshToken, refresh);
app.use('/api/v1/profile', hasValidAccessToken, profile);

app.get('/', async (req, res) => {
  res.send('Platzi laboratio Autenticación con Node.js');
});
