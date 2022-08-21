import { Router } from 'express';

import { deleteUser } from './delete-profile.js';
import { viewUser } from './view-profile.js';
import { updateUser } from './update-profile.js';

export const profile = Router();

profile.use('/', viewUser);
profile.use('/', deleteUser);
profile.use('/', updateUser);
