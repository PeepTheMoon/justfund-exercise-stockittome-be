const fetch = require('node-fetch');
require('dotenv').config();
// const { Router } = require('express');
// const User = require('../models/User.js');

const url = 'https://yahoofinance-stocks1.p.rapidapi.com/companies/list-by-exchange?ExchangeCode=NMS';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.XRAPIDAPIKEY,
    'X-RapidAPI-Host': process.env.XRAPIDAPIHOST
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

