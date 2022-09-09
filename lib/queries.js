const db = require('./connection');

// Create functions for specific queries 
async function queryDepartments(){
    let data;
    await new Promise(resolve => {
        // Query database
        db.query('SELECT * FROM departments', function (err, results) {
        // console.log(results);
        data = results;
        resolve();
        }); 
    });
    // console.log(data)
    return data;
};
async function queryEmployees(){
    let data;
    await new Promise(resolve => {
        // Query database
        db.query('SELECT * FROM employees', function (err, results) {
        // console.log(results);
        data = results;
        resolve();
        }); 
    });
    // console.log(data)
    return data;
};
async function queryRoles(){
    let data;
    await new Promise(resolve => {
        // Query database
        db.query('SELECT * FROM roles', function (err, results) {
        // console.log(results);
        data = results;
        resolve();
        }); 
    });
    // console.log(data)
    return data;
};

async function insertDepartment(val){
    let data;
    await new Promise(resolve => {
        // Insert into database
        sql = `INSERT INTO departments (departmentName) VALUES ('${val}')`
        db.query(sql, function (err, results) {
        if (err) throw err;
        data = results;
        resolve();
        }); 
    });
    return data;
};


module.exports = {queryDepartments, queryEmployees, queryRoles, insertDepartment};