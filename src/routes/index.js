const express = require('express');
const task1  = require('./task1');
const router = express.Router();

router.use('/task-1', task1);

module.exports = router;