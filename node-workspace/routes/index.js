const express = require('express');
const router = express.Router();

router.use('/users', require('./homerouter.js'));

module.exports = router;