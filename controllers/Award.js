const Award = require('../models/Award');

exports.findMVP = (req, res, next) => {
    Award.findMVP()
        .then(([rows, fieldData]) => {
            res.render('Award/MVP', {
                players: rows,
                pageTitle: 'MVP',
                path: '/Award/MVP'
            });
        })
        .catch(err => console.log(err));
};

exports.findDPOY= (req, res, next) => {
    Award.findDPOY()
        .then(([rows, fieldData]) => {
            res.render('Award/DPOY', {
                players: rows,
                pageTitle: 'DPOY',
                path: '/Award/DPOY'
            });
        })
        .catch(err => console.log(err));
};

exports.findROY = (req, res, next) => {
    Award.findROY()
        .then(([rows, fieldData]) => {
            res.render('Award/ROY', {
                players: rows,
                pageTitle: 'Rookie of the year',
                path: '/Award/ROY'
            });
        })
        .catch(err => console.log(err));
};

exports.findSOY = (req, res, next) => {
    console.log("This is a message")
    Award.findSOY()
        .then(([rows, fieldData]) => {
            res.render('Award/SOY', {
                players: rows,
                pageTitle: 'Six Man of Year',
                path: '/Award/SOY'
            });
        })
        .catch(err => console.log(err));
};

exports.findMIP = (req, res, next) => {
    Award.findMIP()
        .then(([rows, fieldData]) => {
            res.render('Award/MIP', {
                players: rows,
                pageTitle: 'Most Improved Player',
                path: '/Award/MIP'
            });
        })
        .catch(err => console.log(err));
};

exports.findCOY = (req, res, next) => {
    Award.findCOY()
        .then(([rows, fieldData]) => {
            res.render('Award/COY', {
                coaches: rows,
                pageTitle: 'Coach of the year',
                path: '/Award/COY'
            });
        })
        .catch(err => console.log(err));
};



