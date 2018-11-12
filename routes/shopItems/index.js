const express = require("express");

const router = express.Router();

const { addItem, findItems } = require("./handlers");

router.post("/shop_item", addItem);
router.get("/shop_item", findItems);

module.exports = router;
