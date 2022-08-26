const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});

pool.on('connect', () => console.log('Postgres connected'));

module.exports = pool;