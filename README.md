# Documentation for Stock It To Me Back-End

A coding exercise for JustFund.

## Written by [Rachel Donahue](https://www.linkedin.com/in/rachelmdonahue/)

### Assumptions

For this project, I assume that the user has already logged in and has navigated to their landing page.

For the price of a given stock, I chose to show the close price sourced from the API as the purchase price for the user and elected to not show the open, high, or low amounts. I am also only showing the cost of the API's most recent (current) entry, and am not displaying historical data (unless it's in the user's order history from a previous date).

### Limitations

I had issues initially using the Yahoo Finance API.  I sourced that API from [RapidAPI](https://rapidapi.com/integraatio/api/yahoofinance-stocks1/details) and did not know the API had been deprecated.  In its place, I chose to use the [Alpha Vantage API](https://www.alphavantage.co/documentation/).

---

## Coding Exercise Instructions

- Use React, Express, and your favorite relational database.
- Write an app that allows you to see the current price of a stock, create a fake buy or sell order, and store it in a database.
- Show the past orders in the front end.
- No authentication or hosting.
- Assume a single user of this app for past activity.
- Be able to look up current prices for a given stock symbol.
- If you can deliver us a Github repo that'll do fine. No deployed URL is needed.
- Time limit: no more than 6h.

### Time to Complete

`>= 6hrs.`

### Instructions for Implementation

1. Clone the repo and `cd` into `justfund-exercise-stockittome-be`

1. Run `npm i` or `yarn` in the terminal, depending on your preferred package manager, to download the required packages.

1. Create a `.env` file at the root of the project and enter the following:
  `ALPHAVANTAGEKEY=U79VOM7N21PR3HG5`

1. In a new terminal, run `psql postgres` to connect to the default Postgres database.

1. In the `psql` command line, type `CREATE DATABASE stocks` and verify its creation with `\list`.  You should see the `stocks` database in the list.  To connect to the database, type `\c stocks`.  You should see a message saying you're now connected, and the terminal prompt should now look like this: `stocks=#`.

1. Copy the contents of *setup.sql* into the `psql` terminal following the `stocks=#` prompt.  You can verify the table creation by typing `SELECT * FROM user_stocks;`  You should also be able to see this in a GUA-client like [pgAdmin](https://www.pgadmin.org/).

1. In a separate terminal, enter `yarn start` to spin up the dev server.
