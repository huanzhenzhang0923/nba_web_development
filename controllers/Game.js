/*fetch all team name**/
const Game = require('../models/Game');

exports.displayFinal = (req, res, next) => {
    console.log("This is a Game")
    Game.displayFinal()
        .then(([rows, fieldData]) => {
            res.render('Game/Final', {
                Games: rows,
                pageTitle: 'Final',
                path: '/Final'
            });
        })
        .catch(err => console.log(err));
};


exports.DisplayAllStarGame = (req, res, next) => {
    console.log("This is a Game")
    Game.DisplayAllStarGame()
        .then(([rows, fieldData]) => {
            res.render('Game/All_Star_Game', {
                Games: rows,
                pageTitle: 'All Star Game',
                path: '/All_Star_Game'
            });
        })
        .catch(err => console.log(err));
};

