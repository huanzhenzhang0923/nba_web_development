const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'NBA',
    password: '923li2018'
});

module.exports = pool.promise();