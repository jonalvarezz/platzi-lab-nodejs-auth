import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';

export const deleteUser = Router();

deleteUser.delete(
  '/',
  // @todo: Validación y sanitización de los datos de entrada

  // @todo: Eliminar el usuario actual según la sesión del token JWT
  async (request, response) => {
    return response.status(200).json({
      //
    });
  }
);
