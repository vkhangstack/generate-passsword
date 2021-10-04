"use strict";

const password = require("p4ssw0rd");

const generatePW = (req, res) => {
  try {
    const input = req.body.password;
    if (!input) return res.send("Invalid password");
    const output = password.hash(input, { cost: 5 });
    if (!output) return res.send("Invalid password hash");
    return res.send(output);
  } catch (error) {
    return res.send(error);
  }
};

module.exports = { generatePW };
