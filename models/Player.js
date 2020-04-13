const db = require('../util/database');

const Player = require('./Player');

module.exports = class Player {
    constructor(PID,Name, Season, Position,Age) {
        this.PID=PID;
        this.Name = Name;
        this.Season = Season;
        this.Position = Position;
        this.Age = Age;
    }

    save() {
        return db.execute(
            'INSERT INTO Player (Name, Season, Position, Age) VALUES (?, ?, ?, ?)',
            [this.Name, this.Season, this.Position, this.Age]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM Player');
    }

    static findallName() {
        return db.execute('SELECT DISTINCT Name,PID FROM Player');
    }

    static findplayerGivenTeam(Team) {
        return db.execute('SELECT DISTINCT * From Player WHERE PID IN (SELECT PID FROM play_in WHERE play_in.Team = ?)', [Team]);
    }

    static findStatisticsGivenPlayer(PID) {
        return db.execute('SELECT * FROM Player Join play_in ON Player.PID=play_in.PID WHERE Player.PID = ?', [PID]);
    }

    static SearchPlayer(PlayerName) {
        return db.execute('SELECT DISTINCT * FROM Player Join play_in ON Player.PID=play_in.PID Where Player.Name LIKE ?',[PlayerName]);
    }
};
