import express from 'express';
import cors from 'cors';
import { signUp } from './routes/sign-up.js';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API
app.use('/api/v1/sign-up', signUp);

app.get('/', async (req, res) => {
  res.send('Platzi laboratio Autenticación con Node.js');
});
