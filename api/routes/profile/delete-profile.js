import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import { verifyToken } from '../../middlewares/auth.handler.js';

export const deleteUser = Router();

deleteUser.delete(
  '/',
  body('userId').notEmpty().isLength(1).isUUID(),
  check('userId'),
  // @todo: Validación y sanitización de los datos de entrada
  // @todo: Eliminar el usuario actual según la sesión del token JWT
  verifyToken,
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty) {
      return response.status(400).json({ errors: errors.array() });
    }
    const user = await UserModel.deleteOne({ _id: request.userId });
    return response.status(200).json({
      data: user,
    });
  }
);
