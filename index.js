require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const auth = require("./routes/authenticate");
const errorHandler = require("./handlers/errors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/api/authenticate", auth);

const PORT = 8081;

app.use(function(req, res, next) {
  let err = new Error(
    "Route not found! You are making request to the wrong route!"
  );
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is doing magic at port: ${PORT}`);
});
