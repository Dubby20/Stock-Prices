const express = require("express");
const stockData = require("./controller");

const router = express.Router();

router.get("/stockPrices", stockData);

module.exports = router;
