const pool = require('../utils/pool');
// const Stock = require('./Stock.js');

module.exports = class User {
    id;
    username;
    email;

    constructor(row) {
      this.id = row.id;
      this.username = row.username;
      this.email = row.email;
    }

    // static async find() {
    //   const { rows } = await pool.query(
    //     `SELECT users.*,
    //         array_to_json(array_agg(stocks.*)) AS stocks
    //         FROM users
    //         JOIN stocks
    //             ON stocks.user_id = users.id
    //         GROUP BY users.id`);

    //   return rows.map(row => new User(row));
    // }

    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM users');
      return rows.map(row => new User(row));
    }
};
