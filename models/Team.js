const db = require('../util/database');

const Team = require('./Team');

module.exports = class Team{
    // constructor(Rank,Season, Team, Win, Lose) {
    //     this.Rank = Rank;
    //     this.Season=Season;
    //     this.Team=Team;
    //     this.Win = Win;
    //     this.Lose = Lose;
    // }
    //
    // save() {
    //     return db.execute(
    //         'INSERT INTO Team (Rank, Season, Team, Win, Lose) VALUES (?, ?, ?, ?, ?)',
    //         [this.Rank, this.Season, this.Team, this.Win, this.Lose]
    //     );
    // }

    static fetchAll() {
        return db.execute('SELECT * FROM Team');
    }

    static fetchAllGivenTeam(Team) {
        return db.execute('SELECT * FROM Team Where Team.Team LIKE ?',[Team]);
    }

    static findTeamGivenLocation(State) {
        console.log('State Machine')
        return db.execute('SELECT * FROM Team natural join Host Where State= ?',[State]);
    }
};
