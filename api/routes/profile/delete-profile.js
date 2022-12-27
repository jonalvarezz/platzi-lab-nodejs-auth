import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import { ComparePassword } from '../../utils/utils.js';

export const deleteUser = Router();

deleteUser.delete(
  '/',

  // Validación y sanitización de los datos de entrada
  body('password').isLength({ min: 6 }),

  async (request, response) => {
    try {
      // Check validation errors
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      // Check password is correct before delete the account
      const { password } = request.body;
      const { _id } = request.user;
      const user = await UserModel.findById(_id);

      const [passwordIsCorrect, passwordComparissonError] =
        await ComparePassword(password, user.password);

      if (passwordComparissonError)
        throw new Error('Unable to compare the passwords');

      if (!passwordIsCorrect)
        return response
          .status(403)
          .json({ error: true, message: 'Password is not correct' });

      // Delete the user
      await UserModel.findByIdAndDelete(_id);

      return response.status(200).json({
        error: false,
        message: 'User was deleted successfully',
      });
    } catch (error) {
      console.error(`[profile DEL]: ${error}`);

      return response.status(500).json({
        error: 'An unexpected error happened. Please try again later',
      });
    }
  }
);
