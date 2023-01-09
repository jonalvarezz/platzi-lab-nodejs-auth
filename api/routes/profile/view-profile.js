import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import { verifyToken } from '../../middlewares/auth.handler.js';
export const viewUser = Router();

viewUser.get(
  '/',
  // @todo: Validación y sanitización de los datos de entrada
  body('username').notEmpty(),
  check('username'),
  // @todo: Ver información del usuario actual según la sesión del token JWT
  verifyToken,
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty) {
      return response.status(400).json({ errors: errors.array() });
    }
    const user = await UserModel.findById(request.userId);
    return response.status(200).json({
      data: user,
    });
  }
);
