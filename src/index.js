"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const generatePW = require("./routes/index");
const expressSanitizer = require("express-sanitizer");
const xXssProtection = require("x-xss-protection");

app.disable("x-powered-by");
app.use(
  cors({
    origin: process.env.BASE_URL,
  }),
);
app.use(xXssProtection());
app.use(express.json());
app.use(expressSanitizer());
app.use("/", generatePW);
const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}...`);
});
