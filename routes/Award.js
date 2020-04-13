const path = require('path');

const express = require('express');

const AwardController = require('../controllers/Award');

const router = express.Router();

// /admin/add-product => GET
router.get('/Award', AwardController.findMVP);

router.get('/Award/MVP', AwardController.findMVP);

// /admin/products => GET
router.get('/Award/MIP', AwardController.findMIP);

router.get('/Award/SOY', AwardController.findSOY);

router.get('/Award/DPOY', AwardController.findDPOY);

router.get('/Award/COY', AwardController.findCOY);

router.get('/Award/ROY', AwardController.findROY);

module.exports = router;
