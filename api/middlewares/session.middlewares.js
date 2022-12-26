import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../config/constants.config.js';

export const hasValidAccessToken = (req, res, next) => {
  try {
    // Check the Authirization header was received
    const header = req.get('Authorization');

    if (!header)
      return res.status(403).json({
        error: true,
        message: 'Authorization header was not provided',
      });

    // Check the Authorization header is correct
    const token = header.split('Bearer ')[1];

    if (!token)
      return res
        .status(400)
        .json({ error: true, message: 'Authorization header is not valid' });

    // Check the token is valid
    const payload = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = { _id: payload.id, username: payload.username };

    return next();
  } catch (error) {
    if (typeof error === 'JsonWebTokenError')
      return res
        .status(400)
        .json({ error: true, message: 'Provided token is not valid' });

    return res.status(500).json({
      error: true,
      message: 'Unexpected error trying to verify the token',
    });
  }
};
