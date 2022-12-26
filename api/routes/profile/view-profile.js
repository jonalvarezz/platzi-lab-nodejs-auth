import { Router } from 'express';
import { UserModel } from '../../models/User.js';

export const viewUser = Router();

viewUser.get(
  '/',
  async (request, response) => {
    const { _id } = request.user;
    const user = await UserModel.findById(_id);

    if (!user)
      return response
        .status(404)
        .json({ error: true, message: 'User was not found' });

    return response.status(200).json({ _id, user: user['username'] });
  }
);
