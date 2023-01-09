import { UserModel } from '../models/User.js';
import jwt from 'jsonwebtoken';
async function verifyToken(req, res, next) {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findOne({ username: decoded.username });
    const tokenUpdated = jwt.sign(
      {
        username: user.username,
        id: user.id,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    req.username = user.username;
    req.userId = user._id.toString();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: 'Time session expired' });
  }
  return next();
}

export { verifyToken };
