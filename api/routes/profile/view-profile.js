import { Router } from 'express';
import { UserModel } from '../../models/User.js';

export const viewUser = Router();

viewUser.get('/', async (request, response) => {
  const { _id, username } = request.user;
  return response.status(200).json({ _id, username });
});
