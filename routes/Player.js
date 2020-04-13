const path = require('path');

const express = require('express');

const PlayerController = require('../controllers/Player');

const router = express.Router();

// /admin/add-product => GET
router.get('/Player', PlayerController.findallName);

// /admin/products => GET
router.get('/Player/:playerid', PlayerController.findStatisticsGivenPlayer);

module.exports = router;
