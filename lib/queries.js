const db = require('./connection');
const cTable = require('console.table');


// Create functions for specific queries 
async function queryDepartments(){
    let data;
    await new Promise(resolve => {
        // Query database
        db.query('SELECT * FROM employee', function (err, results) {
        // console.log(results);
        data = results;
        resolve();
        }); 
    });
    // console.log(data)
    return data;
};


// async function init(){
//     const result = await queryDepartments();
//     console.table(result)
// }

// init()

module.exports = queryDepartments;