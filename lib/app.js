const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json ({ info: 'Stock It To Me API' });
  res.send('Connected!');
});

app.get('/api/v1/users', require('./controllers/user-routes'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
