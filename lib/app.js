import express from 'express';
import bodyParser from 'body-parser';
import * as stockRoutes from './controllers/stock-routes.js';
import notFound from './middleware/not-found.js';
import error from './middleware/error.js';
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send ('Connected to Stock It To Me API!');
});

app.get('/api/v1/user-stocks', stockRoutes);

app.use(notFound);
app.use(error);

export default app;
