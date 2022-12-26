import { Router } from 'express';
import { UserModel } from '../../models/User.js';

export const deleteUser = Router();

deleteUser.delete('/', async (request, response) => {
  try {
    const { _id } = request.user;
    await UserModel.findByIdAndDelete(_id);

    return response.status(200).json({
      error: false,
      message: 'User was deleted successfully',
    });
  } catch (error) {
    return response.status(500).json({
      error: true,
      message: 'Unable to delete the user',
    });
  }
});
