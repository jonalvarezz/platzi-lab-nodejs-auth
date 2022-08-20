import 'dotenv/config';
import { app } from './app.js';
import { connect as db } from './database.js';

db();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  console.log(`[server] Connected to port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.error(`[server] An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
