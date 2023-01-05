import Mongoose from 'mongoose';

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error('DATABASE_URL is not set');
}
Mongoose.set('strictQuery', false);
export const connect = async () => {
  await Mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('[db] Connected');
};
