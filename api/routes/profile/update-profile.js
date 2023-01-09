import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { UserModel } from '../../models/User.js';
import { verifyToken } from '../../middlewares/auth.handler.js';
export const updateUser = Router();

updateUser.put(
  '/',
  verifyToken,
  body('username').isLength(3).isString(),
  body('name').isLength(3).isString(),
  body('email').isEmail().normalizeEmail(),
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const { userId } = request;
    const { username, name, email } = request.body;
    const userToUpdate = await UserModel.findByIdAndUpdate(userId, {
      username,
      name,
      email,
    });
    return response.status(200).json({
      data: userToUpdate,
    });
  }
);
