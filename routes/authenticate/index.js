const express = require("express");

const router = express.Router();

const register = require("./handlers/register"),
  login = require("./handlers/login");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
