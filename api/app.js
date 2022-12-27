import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { signUp } from './routes/auth/sign-up.js';
import { login } from './routes/auth/login.js';
import { profile } from './routes/profile/index.js';
import { hasValidAccessToken } from './middlewares/session.middlewares.js';

export const app = express();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API
// @todo: Almancenar el password de forma segura
app.use('/api/v1/sign-up', signUp);
// @todo: generar un token jwt seguro para la sesión del usuario
app.use('/api/v1/login', login);
// @todo: completar las rutas de profile
app.use('/api/v1/profile', hasValidAccessToken, profile);

app.get('/', async (req, res) => {
  res.send('Platzi laboratio Autenticación con Node.js');
});
