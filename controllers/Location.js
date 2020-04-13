/*fetch all team name**/
const Location = require('../models/Location');

exports.fetchallStates = (req, res, next) => {
    console.log("This is a Location")
    Location.fetchallStates()
        .then(([rows, fieldData]) => {
            res.render('Team/Location', {
                States: rows,
                pageTitle: 'Location Option',
                path: '/Location'
            });
        })
        .catch(err => console.log(err));
};
