"use strict";

const express = require("express");
const router = express.Router();
const { generatePW } = require("../controller/generatePW");
const { xss } = require("express-xss-sanitizer");

router.post("/", xss(), generatePW);

module.exports = router;
