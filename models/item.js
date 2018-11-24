const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: { type: String, required: true },
    editedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
