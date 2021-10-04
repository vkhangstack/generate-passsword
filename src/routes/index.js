'use strict';

const express = require('express');
const router = express.Router();
const { generatePW } = require('../controller/generatePW');

router.get('/', generatePW);

module.exports = router;
