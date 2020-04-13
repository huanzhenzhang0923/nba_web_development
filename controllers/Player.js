/*fetch all team name**/
const Team = require('../models/Team');
const Player = require('../models/Player');

exports.findallName = (req, res, next) => {
    console.log("This is a message")
    Player.findallName()
        .then(([rows, fieldData]) => {
            res.render('Player/Player', {
                players: rows,
                pageTitle: 'Player_List',
                path: '/Player'
            });
        })
        .catch(err => console.log(err));
};

exports.findStatisticsGivenPlayer = (req, res, next) => {
    const PID = req.params.playerid;
    Player.findStatisticsGivenPlayer((PID))
        .then(([rows, fieldData]) => {
            res.render('Player/player_detail', {
                row: rows[0],
                pageTitle: rows.Name,
                path: '/Player/rows.PID'
            });
        })
        .catch(err => console.log(err));
};
