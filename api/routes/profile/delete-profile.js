import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { ERRORS } from '../../config/errors.config.js';
import { UserModel } from '../../models/User.js';
import { ComparePassword } from '../../utils/utils.js';

export const deleteUser = Router();

deleteUser.delete('/', async (request, response) => {
  try {
    const { _id } = request.user;

    // Delete the user
    await UserModel.findByIdAndDelete(_id);

    return response
      .status(200)
      .clearCookie('access-token')
      .clearCookie('refresh-token')
      .json({
        error: false,
        message: 'User was deleted successfully',
      });
  } catch (error) {
    console.error(`[profile DEL]: ${error}`);

    return response.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
});
