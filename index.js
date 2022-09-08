// Import modules/dependencies
const inquirer = require('inquirer');
const cTable = require('console.table');


////////////////            Questions for inquirer          ///////////////
const questions = {
    start: [{
        type: 'list',
        name: 'initalPrompt',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all Employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }],
    addDepartment: [{
        type: 'input',
        name: 'newDepartment',
        message: "What is the name of the department"
    }],
    addRole: [
        {
        type: 'input',
        name: 'name',
        message: 'What is the name of the role?'
        },
        {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?'
        },
        {
        type: 'list',
        name: 'department',
        message: 'Which department does the role belong to?',
        choices: ['Engineering', 'Sales', 'Product', 'Finance']
        }
    ],
    addEmployee: [
        {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?"
        },
        {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?"
        },
        {
        type: 'input',
        name: 'role',
        message: "What is the employee's role?"
        },
        {
        type: 'input',
        name: 'manager',
        message: "What is the employee's manager?"//TODO Maybe change to list of managers
        },
    ],
    updateRole: [{

    }],
}

//////////////          Functions               //////////////
async function startPrompt(){
    result = '';
    await inquirer.prompt(questions.start)
    .then(answer => {
        // console.log(answer)
        result = answer});
    return result    
};

async function viewDeparments(){
    //WHEN I choose to view all departments, THEN I am presented with a formatted table showing department names and department ids 
}

async function viewRoles(){
    //WHEN I choose to view all roles, THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
};

async function viewEmployees(){
    //WHEN I choose to view all employees, THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
};

async function addDepartment(){
    //WHEN I choose to add a department, THEN I am prompted to enter the name of the department and that department is added to the database
};

async function addRole(){
    //WHEN I choose to add a role, THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
};

async function addEmployee(){
    //WHEN I choose to add an employee, THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
};

async function updateRole(){
    //WHEN I choose to update an employee role, THEN I am prompted to select an employee to update and their new role and this information is updated in the database
};


///////////////         Init function           ///////////////
async function init(){
    // WHEN I start the application, THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role 
    const results = await startPrompt();
    console.log(results)
}

init()
