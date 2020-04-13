const db = require('../util/database');

const Player = require('./Player');

module.exports = class Player {
    constructor(Season, Team1, Team2, Result, Champion, MVP) {
        this.Season = Season;
        this.Team1 = Team1;
        this.Team2 = Team2;
        this.Result = Result;
        this.Champion = Champion;
        this.MVP = MVP;
    }

    save() {
        return db.execute(
            'INSERT INTO Player (Season,Team1,Team2,Result,Champion,MVP) VALUES (?, ?, ?, ?, ?, ?)',
            [this.Season, this.Team1, this.Team2, this.Result, this.Champion, this.MVP]
        );
    }

    static displayFinal() {
        return db.execute('SELECT * FROM Final');
    }

    static DisplayAllStarGame() {
        return db.execute('SELECT * FROM All_Star_Game');
    }
};
