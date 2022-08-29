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

