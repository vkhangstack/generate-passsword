"use strict";

const express = require("express");
const router = express.Router();
const { generatePW } = require("../controller/generatePW");

router.post("/", generatePW);

module.exports = router;
