## Description

- Stock ticker prices from the alphavantage stock exchange api

## Endpoints

**Routes**

- GET `/api/v1/stockPrices` Use this route to get stock prices

```{
"Meta Data": {
"1. Information": "Intraday (5min) open, high, low, close prices and volume",
"2. Symbol": "MSFT",
"3. Last Refreshed": "2019-06-11 16:00:00",
"4. Interval": "5min",
"5. Output Size": "Compact",
"6. Time Zone": "US/Eastern"
},
"Time Series (5min)": {
"2019-06-11 16:00:00": {
"1. open": "131.9500",
"2. high": "132.1000",
"3. low": "131.8800",
"4. close": "132.0000",
"5. volume": "617626"
},
"2019-06-11 15:55:00": {
"1. open": "131.9350",
"2. high": "132.0000",
"3. low": "131.8600",
"4. close": "131.9600",
"5. volume": "293443"
},
}
}
```
