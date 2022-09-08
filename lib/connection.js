const mysql = require('mysql2');

// Connect to database

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Matty',
        database: 'employee_db'
    },
    console.log('Connected to employee_db')
);



// db.connect(function (e) {
//     if (e) throw err;
// })

module.exports = db;
