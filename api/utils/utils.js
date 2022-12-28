import {
  ACCESS_TOKEN_AGE,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_AGE,
  REFRESH_TOKEN_SECRET,
} from '../config/constants.config.js';

import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

export const HashPassword = async (password) => {
  try {
    const hashed = await hash(password, 10);
    return [hashed, null];
  } catch (error) {
    return [null, error];
  }
};

export const ComparePassword = async (password, hash) => {
  try {
    const arePasswordsEqual = await compare(password, hash);
    return [arePasswordsEqual, null];
  } catch (error) {
    return [false, error];
  }
};

export const CreateJWTAccessToken = ({ _id, username }) => {
  try {
    const token = jwt.sign({ id: _id, username }, ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_AGE,
    });

    return [token, null];
  } catch (error) {
    return [null, error];
  }
};

export const CreateJWTRefreshToken = ({ _id, username }) => {
  try {
    const token = jwt.sign({ id: _id, username }, REFRESH_TOKEN_SECRET, {
      expiresIn: REFRESH_TOKEN_AGE, // 6 Hours
    });

    return [token, null];
  } catch (error) {
    return [null, error];
  }
};
