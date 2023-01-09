import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../models/User.js';
import { genSalt, hash } from 'bcrypt';
export const signUp = Router();
import { config } from 'dotenv';

config();
signUp.post(
  '/',
  // Validación y sanitización de los datos de entrada
  body('username').not().isEmpty().trim(),
  check('username').custom(async (username) => {
    const maybeUser = await UserModel.findOne({ username });
    if (maybeUser) {
      throw new Error('username already in use');
    }
    return true;
  }), 
  check('email').custom(async (email) => {
    const maybeEmail = await UserModel.findOne({ email });
    if (maybeEmail) {
      throw new Error('email already in use');
    }
    return true;
  }),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty().isLength(3),
  body('email').isEmail().notEmpty(),
  //
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
      const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
      const { username, email, name } = request.body;

      const salt = await genSalt(SALT_ROUNDS);
      const password = await hash(request.body.password, salt);

      const user = await UserModel.create({ username, password, name, email });

      return response.status(201).json({
        data: user,
      });
    } catch (error) {
      console.error(`[signIn]: ${error}`);

      return response.status(500).json({
        error: 'An unexpected error happened. Please try again later',
      });
    }
  }
);
