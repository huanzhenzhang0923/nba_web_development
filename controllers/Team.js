/*fetch all team name**/

const Team = require('../models/Team');
const Player = require('../models/Player');
const Coach = require('../models/Coach');
// const Executive = require('../models/Executive');


exports.getIndex = (req, res, next) => {
    console.log("This is a message")
    Team.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('Team/Index', {
                teams: rows,
                pageTitle: 'Shop',
                path: '/'
            });
        })
        .catch(err => console.log(err));
};

exports.getTeammname = (req, res, next) => {
    Team.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('Team/Team', {
                teams: rows,
                pageTitle: 'All Team',
                path: '/Team'
            });
        })
        .catch(err => console.log(err));
};


exports.getTeammname2 = (req, res, next) => {
    Team.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('Team/Coach', {
                teams: rows,
                pageTitle: 'Team_list',
                path: '/Coach'
            });
        })
        .catch(err => console.log(err));
};

exports.findplayerGivenTeam = (req, res, next) => {
    const Team = req.params.Team;
    console.log("This is a message")
    Player.findplayerGivenTeam(Team)
        .then(([rows, fieldData]) => {
            res.render('Team/Team_detail', {
                players: rows,
                playerID:rows.PID,
                pageTitle: 'Team_Info',
                path: '/Team'
            });
        })
};

exports.findCoachGivenTeam = (req, res, next) => {
    const Team = req.params.Team;
    console.log("This is a Coach")
    Coach.findCoachGivenTeam(Team)
        .then(([rows, fieldData]) => {
            res.render('Team/Coach_detail', {
                coach: rows[0],
                pageTitle: 'Team_info',
                path: '/Coach'
            });
        })
        .catch(err => console.log(err));
};

exports.findExecutiveGivenTeam = (req, res, next) => {
    const Team = req.params.Team;
    console.log("This is a message")
    Executive.findExecutiveGivenTeam(Team)
        .then(([rows, fieldData]) => {
            res.render('Team/Team', {
                teams: rows,
                pageTitle: 'All Team',
                path: '/Team'
            });
        })
        .catch(err => console.log(err));
};

exports.findStatisticsGivenTeam = (req, res, next) => {
    const Team = req.params.Team;
    console.log("This is a message")
    Team.findStatisticsGivenTeam(Team)
        .then(([rows, fieldData]) => {
            res.render('Team/Team', {
                teams: rows,
                pageTitle: 'All Team',
                path: '/Team'
            });
        })
        .catch(err => console.log(err));
};

exports.findTeamGivenLocation = (req, res, next) => {
    const State = req.params.State;
    console.log("This is a State")
    console.log(State)
    Team.findTeamGivenLocation(State)
        .then(([rows, fieldData]) => {
            console.log(State)
            res.render('Team/Team_Info', {
                teams: rows,
                pageTitle: 'Find Team by Location',
                path: '/Team'
            });
        })
        .catch(err => console.log(err));
};
