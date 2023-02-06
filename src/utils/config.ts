import dotenv from 'dotenv';

dotenv.config();

// ---- /.env = PORT=3000

export const ENV_PORT = process.env.PORT;

export const DB_PORT = process.env.DB_PORT;
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const DB_DBNAME = process.env.DB_DBNAME;