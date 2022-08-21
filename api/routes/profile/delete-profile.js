import { Router } from 'express';
import { body, check, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';

export const deleteUser = Router();

deleteUser.delete('/', async (request, response) => {
  const { username } = request.user;

  try {
    await UserModel.findOneAndDelete({ username });

    return response.status(200).json({});
  } catch (error) {
    console.debug(`[deleteUser]: ${error}`);

    return response.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
});
