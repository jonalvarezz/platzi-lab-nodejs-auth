import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';

export const updateUser = Router();

updateUser.put(
  '/',
  // @todo: Validación y sanitización de los datos de entrada

  // @todo: Actualizar información usuario según la sesión del token JWT
  async (request, response) => {
    return response.status(200).json({
      //
    });
  }
);
