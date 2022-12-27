import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import { ComparePassword, HashPassword } from '../../utils/utils.js';

export const updateUser = Router();

updateUser.put(
  '/',

  // Validación y sanitización de los datos de entrada
  body('newUsername').not().isEmpty().trim(),
  body('newPassword').isLength({ min: 6 }),
  body('currentPassword').isLength({ min: 6 }),

  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { newUsername, newPassword, currentPassword } = request.body;
    const { _id } = request.user;

    // Get the current user
    const user = await UserModel.findById(_id);

    // Validate the username is unique (as needed)
    if (user.username !== newUsername) {
      const alreadyExists = await UserModel.findOne({ username: newUsername });

      if (alreadyExists)
        return response
          .status(409)
          .json({ error: true, message: 'Username already exists' });
    }

    // Validate the current password is correct
    const [currensPasswordIsCorrect, _] = await ComparePassword(
      currentPassword,
      user['password']
    );

    if (!currensPasswordIsCorrect)
      return response
        .status(403)
        .json({ error: true, message: 'Current password is not correct' });

    // hash the new password
    const [newPasswordHash, passwordHashError] = await HashPassword(
      newPassword
    );

    if (passwordHashError)
      return response
        .status(500)
        .json({ error: true, message: 'Unable to hash the new password' });

    // Update the user object
    await UserModel.findByIdAndUpdate(_id, {
      username: newUsername,
      password: newPasswordHash,
    });

    return response.status(200).json({
      error: false,
      message: 'User was updated successfully',
    });
  }
);
