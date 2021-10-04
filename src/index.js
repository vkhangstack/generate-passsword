"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const generatePW = require("./routes/index");

app.disable("x-powered-by");
app.use(
  cors({
    origin: process.env.BASE_URL,
  }),
);
app.use(express.json());
app.use("/", generatePW);
const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}...`);
});
