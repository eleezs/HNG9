const express = require('express');
const { solveMaths } = require('../controller/task2');
const router = express.Router();


router.post('/simple-arithematic', solveMaths)

module.exports = router;