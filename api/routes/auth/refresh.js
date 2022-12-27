import { Router } from 'express';
import { CreateJWTAccessToken } from '../../utils/utils.js';
export const refresh = Router();

refresh.get('/', async (request, response) => {
  try {
    const [accessToken, accessTokenError] = CreateJWTAccessToken(request.user);
    if (accessTokenError) throw new Error('Unable to create the access token');

    // Send the new cookie
    response
      .cookie('access-token', accessToken, {
        maxAge: 3_600_000,
        httpOnly: true,
      })
      .json({
        error: false,
        message: 'New access token was setted as cookie successffully',
      });
  } catch (error) {
    console.error(`[refresh]: ${error}`);

    return response.status(500).json({
      error: 'An unexpected error happened. Please try again later',
    });
  }
});
