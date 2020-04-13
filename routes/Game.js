const path = require('path');

const express = require('express');

const GameController = require('../controllers/Game');

const router = express.Router();

router.get('/Final', GameController.displayFinal);

router.get('/All_Star_Game', GameController.DisplayAllStarGame);


module.exports = router;
