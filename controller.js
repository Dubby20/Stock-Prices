const fetch = require("node-fetch");

const apiUrl =
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=BXJNNJMIFXFFZV2J";

const stockData = (request, response) => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      return response.status(200).json(data);
    })
    .catch(err => {
      return err;
    });
};

module.exports = stockData;
