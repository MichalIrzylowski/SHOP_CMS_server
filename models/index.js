const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect(
  "mongodb://localhost:27017/shop_cms",
  {
    keepAlive: true,
    useNewUrlParser: true
  }
);

module.exports.User = require("./user");