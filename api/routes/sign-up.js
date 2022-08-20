import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
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
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { username, password } = request.body;

    const user = await UserModel.create({ username, password });

    return response
      .status(201)
      .json({ username: user.username, createdAt: user.createdAt });
  }
);
