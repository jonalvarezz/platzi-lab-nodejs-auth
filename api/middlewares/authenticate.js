import { TextEncoder } from 'util';
import { jwtVerify } from 'jose';

import { UserModel } from '../models/User.js';
import * as config from '../config.js';

export const verifyToken = async (request) => {
  const { authorization } = request.headers;
  const token = (authorization || '').replace('Bearer ', '');

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(config.jwtSecretKey)
    );

    return verified.payload;
  } catch (e) {
    console.error(e);
    throw new Error('Invalid token');
  }
};

const defaultOptions = {
  throwOnError: true,
};

/**
 * Authenticate a user
 * If the JWT token is valid and the user exists, `request.user` is set to the user.
 * The JWT token is expected to be in the Authorization header.
 *
 * if `options.throwOnError` is true, an error is thrown if the token is invalid or the user does not exist.
 *
 * @example
 * const authenticate = require('api/middleware/authenticate');
 * app.use('/my/protected/route', authenticate, (req, res) => { res.json(req.user); });
 */
export const authenticate = (options) => async (request, response, next) => {
  const _options = { ...defaultOptions, ...options };

  try {
    const payload = await verifyToken(request);

    const id = payload.id;
    const user = await UserModel.findById(id);

    if (!user) {
      throw new Error('Invalid token');
    }

    request.user = user;
    next();
  } catch (e) {
    if (e && e.message) {
      console.error(e.message);
    }

    if (_options.throwOnError) {
      return response.status(401).json({ error: e.message });
    }

    next();
  }
};
