"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");

app.disable("x-powered-by");
app.use(
  cors({
    origin: process.env.BASE_URL,
  }),
);
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}...`);
});
