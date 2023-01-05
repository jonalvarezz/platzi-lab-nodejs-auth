import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import { verifyToken } from '../../middlewares/auth.handler.js';
export const viewUser = Router();

viewUser.get(
  '/',
  // @todo: Validación y sanitización de los datos de entrada
  body('username').not().isEmpty().trim(),
  // @todo: Ver información del usuario actual según la sesión del token JWT
  verifyToken,
  async (request, response) => {
    const user = UserModel.findOne({ username: request.username });
    return response.status(200).json({
      data: user,
      //
    });
  }
);
