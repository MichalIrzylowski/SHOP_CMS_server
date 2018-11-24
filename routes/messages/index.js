const express = require("express");
const { addMessage, loadMessages } = require("./handlers");

const router = express.Router();

router.get("/", loadMessages);
router.post("/add_message", addMessage);

module.exports = router;
