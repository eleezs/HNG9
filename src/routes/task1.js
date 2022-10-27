const express = require('express');
const { firstDisplay } = require('../controller/task1');
const router = express.Router();

router.get('/simple-display', firstDisplay)

module.exports = router
