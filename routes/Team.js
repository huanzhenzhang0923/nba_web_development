const path = require('path');

const express = require('express');

const TeamController = require('../controllers/Team');

const StandingController = require('../controllers/Standing');

const router = express.Router();

router.get('/', TeamController.getIndex);

router.get('/Team', TeamController.getTeammname);

router.get('/Team/:Team', TeamController.findplayerGivenTeam);

router.get('/Coach', TeamController.getTeammname2);

router.get('/Coach/:Team', TeamController.findCoachGivenTeam);

router.get('/Standing',StandingController.findByConference);

router.get('/Location/:State', TeamController.findTeamGivenLocation);
//
// router.get('/Standing',StandingController.fetchallConference)

module.exports = router;

