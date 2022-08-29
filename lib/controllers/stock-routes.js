// import fetch from 'node-fetch';

// const symbolSearch = (searchInput) => {
//   const functionValue = 'SYMBOL_SEARCH';
  
//   fetch(`https://www.alphavantage.co/query?function=${functionValue}&keywords=${searchInput}&apikey=${process.env.ALPHAVANTAGEKEY}`)
//     .then(res => res.json())
//     // We are only interested in the first two key-value pairs of each object returned from the search query
//     .then(({ bestMatches }) => bestMatches.map(item =>
//       Object.fromEntries(Object.entries(item).slice(0, 2))))
//     // We want to reshape the object for readability and ease of use
//     .then(matches => matches.map(item => ({
//       symbol: Object.values(item)[0],
//       name: Object.values(item)[1]
//     })))
//     .then(res => console.log('res', res))
//     .catch(err => console.error('error:' + err));
// };

// export default symbolSearch;

import Router from 'express';
import UserStocks from '../models/Stock.js';

module.exports = Router()
  .post('/', (req, res, next) => {
    UserStocks
      .insert(req.body)
      .then(stock => res.send(stock))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    UserStocks
      .find()
      .then(stocks => res.send(stocks))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    UserStocks
      .findById(req.params.id)
      .then(stock => res.send(stock))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    UserStocks
      .delete(req.params.id)
      .then(stock => res.send(stock))
      .catch(next);
  });

