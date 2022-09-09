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
    await new Promise(resolve => {
        // Insert into database
        sql = `INSERT INTO departments (departmentName) VALUES ('${val}')`;
        db.query(sql, function (err, results) {
        if (err) throw err;
        data = results;
        resolve();
        }); 
    });
};
async function insertRole(val){
    switch (val.department){
        case 'Engineering':
            dep =1;
            break;
        case 'Sales':
            dep =2;
            break;
        case 'Product':
            dep =3;
            break;
        case 'Finance':
            dep =4;
            break;
        default:
            console.log('default');
            break;    
    }
    await new Promise(resolve => {
        // Insert into database
        sql = `INSERT INTO roles (title, salary, department_id) 
        VALUES ('${val.name}', '${val.salary}', ${dep})`;
        db.query(sql, function (err, results) {
        if (err) throw err;
        data = results;
        resolve();
        }); 
    });
};


module.exports = {queryDepartments, queryEmployees, queryRoles, insertDepartment, insertRole};