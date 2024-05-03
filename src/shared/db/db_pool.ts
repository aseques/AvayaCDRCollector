import mariadb from 'mariadb';

export const dbPool = mariadb.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: 5,
  allowPublicKeyRetrieval: true,
});
