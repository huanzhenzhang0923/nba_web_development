const db = require('../util/database');

const Award = require('./Award');

module.exports = class Award{
    constructor(Season,Champion,MVP) {
        this.Season=Season;
        this.DPOY=DPOY;
        this.MVP = MVP;
        this.Champion=Champion;
        this.ROY=ROY;
        this.SOY=SOY;
    }

    save() {
        return db.execute(
            'INSERT INTO Award (Season,DPOY,MVP,Champion,ROY,SOY) VALUES (?, ?, ?, ?, ?, ?)',
            [this.Season,this.DPOY,this.MVP,this.Champion,this.ROY,this.SOY ]
        );
    }

    static findMVP() {
        return db.execute('SELECT * FROM MVP');
    }

    static findDPOY() {
        return db.execute('SELECT * FROM DPOY');
    }

    static findROY() {
        return db.execute('SELECT * FROM ROY');
    }

    static findSOY() {
        return db.execute('SELECT * FROM Six_Man_of_Year');
    }

    static findMIP() {
        return db.execute('SELECT * FROM MIP');
    }

    static findCOY() {
        return db.execute('SELECT * FROM COY');
    }

};
