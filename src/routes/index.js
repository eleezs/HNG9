const express = require('express');
const task1  = require('./task1');
const task2 = require('./task2')
const router = express.Router();

router.use('/task-1', task1);
router.use('/task-2', task2);

module.exports = router;