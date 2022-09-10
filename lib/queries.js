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
        sql = "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departmentName, roles.salary, CONCAT(e.first_name, ' ', e.last_name) AS manager from employees INNER JOIN roles ON roles.id = employees.role_id INNER JOIN departments ON departments.id = roles.department_id LEFT JOIN employees e ON employees.manager_id = e.id;"
        db.query(sql, function (err, results) {
        if (err) throw error; 
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
async function insertEmployee(val){
    switch (val.manager){
        case 'Matt Yang':
            dep =1;
            break;
        case 'Scott Lee':
            dep =2;
            break;
        case 'Jessica Moua':
            dep =3;
            break;
        case 'Vanessa Yang':
            dep =4;
            break;
        default:
            console.log('default');
            break;    
    };
    switch (val.role){
        case 'Software Engineer':
        rol_id = 5;
        break;
        case 'Mechanical Engineer':
        rol_id = 6;
        break;
        case 'Associate Product Manager':
        rol_id = 7;
        break;
        case 'Accountant':
        rol_id = 8;
        break;
        default:
            console.log('default');
            break;    
    };

    await new Promise(resolve => {
        // Insert into database
        sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) 
        VALUES ('${val.firstName}', '${val.lastName}', '${rol_id}',${dep})`;
        db.query(sql, function (err, results) {
        if (err) throw err;
        data = results;
        resolve();
        }); 
    });
};
async function updateEmployee(name, role){
    await new Promise(resolve => {
        // Insert into database
        sql = `UPDATE employees SET role_id = ${role} WHERE first_name = '${name}'`;
        db.query(sql, function (err, results) {
        if (err) throw err;
        data = results;
        resolve();
        }); 
    });
};

module.exports = {queryDepartments, queryEmployees, queryRoles, insertDepartment, insertRole, insertEmployee, updateEmployee};