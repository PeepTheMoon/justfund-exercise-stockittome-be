import fs from 'fs';
import pool from '../lib/utils/pool';
import request from 'supertest';
import app from '../lib/app';
import UserStocks from '../lib/models/Stock.js';
// import agent from 'superagent';

describe('User stock routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  afterAll(() => {
    return pool.end();
  });

  it('adds a purchased stock', async() => {
    const stock = await UserStocks
      .insert({
        symbol: 'BOAAX',
        name: 'CollegeAdvantage 529 Savings Plan OH Blackrock Aggressive Growth Ptf Opt Cl A',
        closePrice: ''
      });

    return request(app)
      .post('/api/v1/user-stocks')
      .send({
        id: `${stock.id}`,
        symbol: 'BOAAX',
        name: 'CollegeAdvantage 529 Savings Plan OH Blackrock Aggressive Growth Ptf Opt Cl A',
        closePrice: ''
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          symbol: 'BOAAX',
          name: 'CollegeAdvantage 529 Savings Plan OH Blackrock Aggressive Growth Ptf Opt Cl A',
          closePrice: ''
        });
      });
  });

  // it('returns all stocks', async () => {
  //   await pool.query(fs.readFileSync('./__tests__/stocksTest.sql', 'utf-8'));
  //   const agent = request.agent(app);
  //   const stocks = await UserStocks
  //     .find();

  //   const res = await agent
  //     .get('/api/v1/user-stocks')

  //   expect(res.body).toEqual(stocks);
  // });

});
