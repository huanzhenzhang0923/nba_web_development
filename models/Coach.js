const db = require('../util/database');

const Coach = require('./Coach');

module.exports = class Coach{
    constructor(CoachName,Team) {
        this.CoachName=CoachName;
        this.Team=Team;
    }

    save() {
        return db.execute(
            'INSERT INTO Award (CoachName, Team) VALUES (?, ?)',
            [this.CoachName, this.Team]
        );
    }

    static findCoachGivenTeam(Team) {
        return db.execute('SELECT * FROM Teach Natural Join Coach WHERE Teach.Team= ?',[Team]);
    }


    static QueryCoachInfo(Team) {
        return db.execute('SELECT * FROM Teach Natural Join Coach WHERE Teach.Team= ?',[Team]);
    }
};
