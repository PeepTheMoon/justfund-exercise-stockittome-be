const pool = require('../utils/pool');

module.exports = class Stock {
    id;
    userId;
    symbol;
    company;
    price;

    constructor(row) {
      this.id = row.id;
      this.userId = String(row.user_id);
      this.symbol = row.symbol;
      this.company = row.company;
      this.price = row.price;
    }

    static async insert({ userId, symbol, company, price }) {
      const { rows } = await pool.query(
        `INSERT INTO stocks
            (
                user_id,
                symbol,
                company,
                price
            ) VALUES (
                $1, $2, $3, $4
            ) RETURNING *`,
        [
          userId,
          symbol,
          company,
          price
        ]
      );
      return {
        ...new Stock(rows[0])
      };
    }

    static async find() {
      const { rows } = await pool.query(
        `SELECT stocks.*,
            array_to_json(array_agg(stocks.*)) AS stocks
            FROM users
            GROUP BY users.id`);

      return rows.map(row => new Stock(row));
    }
};
