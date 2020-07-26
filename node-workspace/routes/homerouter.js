const express = require('express');
const router = express.Router();

const homecontroller = require('../controllers/homecontroller.js');
router.get('/home', homecontroller.homecontroller);

module.exports = router;