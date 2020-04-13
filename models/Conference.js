const db = require('../util/database');

const Conference = require('./Conference');

module.exports = class Conference {
    constructor(Team, Division, Conference) {
        this.Team = Team;
        this.Division = Division;
        this.Conference =Conference;
    }
    save() {
        return db.execute(
            'INSERT INTO member_of (Team, Division, Conference) VALUES (?, ?, ?)',
            [this.Team, this.Division, this.Conference]
        );
    }
    static fetchAll() {
        return db.execute('SELECT * FROM member_of');
    }

    static fetchallConference() {
        return db.execute('SELECT distinct Conference FROM member_of');
    }

    static fetchAllDivision() {
        return db.execute('SELECT distinct Division FROM member_of');
    }

    static findByConference() {
        return db.execute('SELECT * FROM member_of Natural Join Team');
    }

    static findDivisionByConference(conference) {
        return db.execute('SELECT Division FROM member_of WHERE member_of.Conference = ?', [conference]);
    }


    static findByDivision(division) {
        return db.execute('SELECT Team FROM member_of WHERE member_of.Division = ?', [division]);
    }
};
