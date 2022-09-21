import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';

import { hashPassword } from '../../helpers/auth.js';
import { UserModel } from '../../models/User.js';

export const updateUser = Router();

updateUser.put(
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

  //  Actualizar información usuario según la sesión del token JWT
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const user = request.user;

      const password = await hashPassword(request.body.password);

      await UserModel.findByIdAndUpdate(user.id, {
        username: request.body.username,
        password: password,
      });
      // force get update
      const newUser = await UserModel.findById(user.id);

      return response.status(200).json({
        username: newUser.username,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      });
    } catch (error) {
      console.debug(`[updateUser]: ${error}`);

      return response.status(500).json({
        error: 'An unexpected error happened. Please try again later',
      });
    }
  }
);
