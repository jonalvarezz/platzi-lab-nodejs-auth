import express from 'express';
import cors from 'cors';
import { signUp } from './routes/sign-up.js';
import { login } from './routes/login.js';
import { profile } from './routes/profile/index.js';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API
app.use('/api/v1/sign-up', signUp);
app.use('/api/v1/login', login);
// @todo: completar las rutas de profile
app.use('/api/v1/profile', profile);

app.get('/', async (req, res) => {
  res.send('Platzi laboratio Autenticación con Node.js');
});
