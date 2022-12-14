import pg from 'pg';

const pool = new pg.Pool({
  user: process.env.USER,
  host: 'localhost',
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});

pool.on('connect', () => console.log('Postgres connected'));

export default pool;
