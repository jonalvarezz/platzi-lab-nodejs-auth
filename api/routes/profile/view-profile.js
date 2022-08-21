import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';

export const viewUser = Router();

viewUser.get('/', async (request, response) => {
  const { username } = request.user;

  return response.status(200).json({
    username,
  });
});
