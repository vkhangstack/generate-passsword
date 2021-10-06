"use strict";

const express = require("express");
const router = express.Router();
const { generatePW } = require("../controller/generatePW");

router.get("/", (req, res) => {
  res.render("index", { data: "", output: "" });
});
router.post("/create", generatePW);

module.exports = router;
