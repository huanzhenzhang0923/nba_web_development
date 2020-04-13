const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');

const Team = require('./models/Team');
const Player = require('./models/Player');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const PlayerRoutes = require('./routes/Player');
const LocationRoutes = require('./routes/Location');
const TeamRoutes = require('./routes/Team');
const GameRoutes = require('./routes/Game');
const AwardRoutes = require('./routes/Award');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var urlencodedbodyparser = bodyParser.urlencoded({ extended: false })

app.use(PlayerRoutes);
app.use(TeamRoutes);
app.use(GameRoutes);
app.use(AwardRoutes);
app.use(LocationRoutes);

app.post("/MyTeam", urlencodedbodyparser,function (req, res) {
    const TeamName = '%'+req.body.team_name+'%';
    Team.fetchAllGivenTeam(TeamName)
        .then(([rows, fieldData]) => {
            res.render('Team/Team_Info', {
                teams: rows,
                pageTitle: 'Search Team',
                path: '/Team'
            });
        })
        .catch(err => console.log(err));
});

app.post("/MyPlayer", urlencodedbodyparser,function (req, res) {
    const PlayerName = '%'+req.body.player_name+'%';
    Player.SearchPlayer(PlayerName)
        .then(([rows, fieldData]) => {
            res.render('Player/Player_Info', {
                rows: rows,
                pageTitle: 'Search Player',
                path: '/Player'
            });
        })
        .catch(err => console.log(err));
});

// app.use(errorController.get404);

app.listen(3000)
