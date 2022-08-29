import pool from '../utils/pool.js';

module.exports = class UserStocks {
    id;
    symbol;
    name;
    closePrice;

    constructor(row) {
      this.id = String(row.id);
      this.symbol = row.symbol;
      this.name = row.name;
      this.closePrice = row.close_price;
    }

    static async insert({ symbol, name, closePrice }) {
      const { rows } = await pool.query(
        `INSERT INTO user_stocks (
                symbol,
                name,
                close_price
            ) VALUES (
                $1, $2, $3
            ) RETURNING *`,
        [
          symbol,
          name,
          closePrice
        ]
      );

      return {
        ...new UserStocks(rows[0])
      };
    }

    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM user_stocks'
      );

      return rows.map(row => new UserStocks(row));
    }

    static async findById(id) {
      const { rows } = await pool.query(
        `SELECT user_stocks
         WHERE user_stocks.id = $1`, [id]);

      if(!rows[0]) throw new Error(`No stocks with id ${id}`);
    }

    static async delete(id) {
      const { rows } = await pool.query(
        `DELETE FROM user_stocks
        WHERE id = $1
        RETURNING * `,
        [id]
      );

      return new UserStocks(rows[0]);
    }
};
