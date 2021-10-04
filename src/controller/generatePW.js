"use strict";

const password = require("p4ssw0rd");

const generatePW = (req, res) => {
  try {
    const input = { data: req.sanitizer(req.body.pass) };

    if (!input.data) return res.send("Invalid password");
    const output = password.hash(input.data, { cost: 5 });
    if (!output) return res.send("Invalid password hash");
    return res.send(output);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { generatePW };
