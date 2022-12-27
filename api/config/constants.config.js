export const ACCESS_TOKEN_SECRET =
  process.env.JWT_ACCESS_TOKEN_SECRET || 'access';

export const ACCESS_TOKEN_AGE = 1800; // seconds, 1/2 hour

export const REFRESH_TOKEN_SECRET =
  process.env.JWT_REFRESH_TOKEN_SECRET || 'refresh';

export const REFRESH_TOKEN_AGE = 21600; // seconds, 6 hours
