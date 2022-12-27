import { Router } from 'express';
import { CreateJWTAccessToken } from '../../utils/utils.js';
export const refresh = Router();

refresh.get('/', async (request, response) => {
  const [accessToken, accessTokenError] = CreateJWTAccessToken(request.user);

  if (accessTokenError)
    return response
      .status(500)
      .json({ error: true, message: 'Unable to create access token' });

  // Send the new cookie
  response
    .cookie('access-token', accessToken, {
      maxAge: 3_600_000,
      httpOnly: true,
    })
    .json({
      errro: false,
      message: 'New access token was setted as cookie successffully',
    });
});
