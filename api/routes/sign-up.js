import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';

import { hashPassword } from '../helpers/auth.js';
import { UserModel } from '../models/User.js';

export const signUp = Router();

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
  body('password').isLength({ min: 6 }),

  //
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const { username } = request.body;
      const password = await hashPassword(request.body.password);

      const user = await UserModel.create({ username, password });

      return response
        .status(201)
        .json({ username: user.username, createdAt: user.createdAt });
    } catch (error) {
      console.error(`[signIn]: ${error}`);

      return response.status(500).json({
        error: 'An unexpected error happened. Please try again later',
      });
    }
  }
);
