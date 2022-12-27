import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import {
  ACCESS_TOKEN_AGE,
  REFRESH_TOKEN_AGE,
} from '../../config/constants.config.js';
import { ERRORS } from '../../config/errors.config.js';
import { UserModel } from '../../models/User.js';
import {
  ComparePassword,
  CreateJWTAccessToken,
  CreateJWTRefreshToken,
} from '../../utils/utils.js';

export const login = Router();

login.post(
  '/',

  // Validación y sanitización de los datos de entrada
  body('username').not().isEmpty().trim(),
  body('password').isLength({ min: 6 }),

  //
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const { username, password } = request.body;
      const user = await UserModel.findOne({ username });

      if (!user) {
        return response.status(400).json({
          error: 'username or password is incorrect',
        });
      }

      const [isPasswordValid, passwordComparissonError] = await ComparePassword(
        password,
        user.password
      );

      if (passwordComparissonError)
        throw new Error(ERRORS.PASSWORD_COMPARISSON_ERROR);

      if (!isPasswordValid)
        return response.status(400).json({
          error: 'username or password is incorrect',
        });

      const [accessToken, accessTokenError] = CreateJWTAccessToken(user);

      if (accessTokenError) throw new Error(ERRORS.ACCESS_TOKEN_CREATION_ERROR);

      const [refreshToken, refreshTokenError] = CreateJWTRefreshToken(user);
      const version = request.baseUrl.split('/')[2];

      if (refreshTokenError)
        throw new Error(ERRORS.REFRESH_TOKEN_CREATION_ERROR);

      return response
        .status(201)
        .cookie('access-token', accessToken, {
          maxAge: ACCESS_TOKEN_AGE * 1000, // ms
          httpOnly: true,
        })
        .cookie('refresh-token', refreshToken, {
          maxAge: REFRESH_TOKEN_AGE * 1000, // ms
          httpOnly: true,
          path: `/api/${version}/refresh`, // Only available on this route
        })
        .json({ username: user.username });
    } catch (error) {
      console.error(`[signIn]: ${error}`);

      return response.status(500).json({
        error: 'An unexpected error happened. Please try again later',
      });
    }
  }
);
