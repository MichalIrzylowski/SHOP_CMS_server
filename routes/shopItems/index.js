const express = require("express");

const router = express.Router();

const {
  addItem,
  findItems,
  findItem,
  deleteItem,
  updateItem
} = require("./handlers");

router.post("/shop_item", addItem);
router.get("/shop_item", findItems);
router.get("/shop_item/:id", findItem);
router.delete("/shop_item/:id", deleteItem);
router.put("/shop_item/:id", updateItem);

module.exports = router;
