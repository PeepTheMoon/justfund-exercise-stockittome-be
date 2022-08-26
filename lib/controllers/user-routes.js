const { Router } = require('express');
const User = require('../models/User.js');

module.exports = Router()

  .get('/', (req, res, next) => {
    // res.json({ info: 'here' }),
    User
      .find()
      .then(users => {
        // console.log('User: ', users),
        res.send(users);
      })
      .catch(next);
  });

// .get('/stocks/:id', async(req, res, next) => {
//   User
//     .findOneStock(req.user, req.params.id)
//     .then(stock => res.send(stock))
//     .catch(next);
// })
