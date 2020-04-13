const path = require('path');

const express = require('express');

const LocationController = require('../controllers/Location');

const router = express.Router();

router.get('/Location', LocationController.fetchallStates);

module.exports = router;

