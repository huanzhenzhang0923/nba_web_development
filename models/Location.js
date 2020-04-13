const db = require('../util/database');

const Location = require('./Location');

module.exports = class Location {
    constructor(City,State) {
        this.City = City;
        this.State = State;
    }

    static fetchallStates() {
        return db.execute('SELECT State FROM Location');
    }
};
