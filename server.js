const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const router = require("./routes");

const PORT = 7500;

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.get("/", (req, res) =>
  res.status(200).json({
    message: "Welcome to stock exchange"
  })
);

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
