import express from 'express';
import cors from 'cors';

export const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Platzi laboratio Autenticación con Node.js');
});
