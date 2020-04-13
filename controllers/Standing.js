const Conference = require('../models/Conference');
const Teammodel = require('../models/Team');
const Standing = require('./Standing');

exports.findByConference= (req, res, next) => {
        Conference.findByConference()
            .then(([Team]) => {
                res.render('Team/Standing', {
                    Teams: Team,
                    pageTitle: 'Conference_Standing',
                    path: '/Standing'
                });
            })
};
//
//
//
//
//
// exports.fetchallConference= (req, res, next) => {
//     Conference.fetchallConference()
//         .then(([conferences]) => {
//             for (let conference of conferences) {
//                 res.render('Team/Standing', {
//                     conference: conference,
//                     pageTitle: 'Conference_Standing',
//                     path: '/Standing'
//                 });
//                 next()
//             }
//         })
// };
//
//
//
// exports.findEasternConference = (req, res, next) => {
//     console.log("This is a message")
//     Conference.findByConference('Eastern Conference')
//         .then(([Team]) => {
//             res.render('Team/Standing', {
//                 Teams1: Team,
//                 pageTitle: 'Conference_Standing',
//                 path: '/Standing'
//             });
//         })
//         // .catch(err => console.log(err));
// };
//
//
// exports.findWesternConference = (req, res, next) => {
//     console.log("This is a message")
//     Conference.findByConference('Western Conference')
//         .then(([Team]) => {
//             res.render('Team/Standing', {
//                 Teams2: Team,
//                 pageTitle: 'Conference_Standing',
//                 path: '/Standing'
//             });
//         })
//         .catch(err => console.log(err));
// };






// exports.findTeamstatistics= (req, res, next) => {
//     const team = req.params.team;
//     console.log("This is a message")
//     Team.fetchAllGivenTeam(team)
//         .then(([Teams]) => {
//             res.render('Team/Standing', {
//                 Teams: Teams,
//                 pageTitle: 'Conference_Standing',
//                 path: '/Standing'
//             });
//         })
//         .catch(err => console.log(err));
// };



// exports.fetchallConference2= (req, res, next) => {
//     console.log("This is a message")
//     Conference.fetchallConference()
//         .then(([rows, fieldData]) => {
//             res.render('Team/Division', {
//                 conferences: rows,
//                 pageTitle: 'Division_Standing',
//                 path: '/Standings/Division'
//             });
//         })
//         .catch(err => console.log(err));
// };
//
//
// exports.findDivisionByConference = (req, res, next) => {
//     const conference = req.params.Conference;
//     console.log("This is a message")
//     Conference.findDivisionByConference(conference)
//         .then(([rows, fieldData]) => {
//             res.render('Team/Division', {
//                 Division: rows,
//                 pageTitle: 'Division_Standing',
//                 path: '/Standings/Division'
//             });
//         })
//         .catch(err => console.log(err));
// };
//
//
//
//
// exports.findByDivision = (req, res, next) => {
//     const division = req.params.Division;
//     console.log("This is a message")
//     Conference.findByDivision(division)
//         .then(([rows, fieldData]) => {
//             res.render('Team/Division', {
//                 Team: rows,
//                 pageTitle: 'Division_Standing',
//                 path: '/Standings/Division'
//             });
//         })
//         .catch(err => console.log(err));
// };
