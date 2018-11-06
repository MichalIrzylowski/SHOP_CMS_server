const express = require("express");

const router = express.Router();

const { addItem } = require("./handlers");

router.post("/shop_item", addItem);

module.exports = router;
