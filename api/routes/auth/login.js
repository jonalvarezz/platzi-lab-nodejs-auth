import { Router } from 'express';
import { body, validationResult } from 'express-validator';
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
        return response
          .status(500)
          .json({ error: true, message: 'Unable to compare user password' });

      if (!isPasswordValid) {
        return response.status(400).json({
          error: 'username or password is incorrect',
        });
      }

      const [accessToken, accessTokenError] = CreateJWTAccessToken(user);

      if (accessTokenError)
        return response
          .status(500)
          .json({ error: true, message: 'Unable to create the access token' });

      const [refreshToken, refreshTokenError] = CreateJWTRefreshToken(user);
      const version = request.baseUrl.split('/')[2];

      if (refreshTokenError)
        return response
          .status(500)
          .json({ error: true, message: 'Unable to create the refresh token' });

      return response
        .status(201)
        .cookie('access-token', accessToken, {
          maxAge: 3_600_000,
          httpOnly: true,
        })
        .cookie('refresh-token', refreshToken, {
          maxAge: 21_600_000,
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
