"use strict";

const crypto = require("crypto");

const generatePW = (req, res) => {
  try {
    const output = req.body.password;
    if (!output) return res.render("index", { data: "", output: output });
    const data = crypto.createHash("sha256").update(output).digest("hex");
    if (!data) return res.render("index", { data: "", output: output });
    return res.render("index", { data: data, output: output });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { generatePW };
