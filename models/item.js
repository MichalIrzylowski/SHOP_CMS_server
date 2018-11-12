const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
