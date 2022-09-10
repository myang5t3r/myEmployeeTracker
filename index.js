// Import modules/dependencies
const inquirer = require('inquirer');
const cTable = require('console.table');
const {queryDepartments, queryEmployees, queryRoles, insertDepartment, insertRole, insertEmployee, updateEmployee} = require('./lib/queries')

////////////////            Questions for inquirer          ///////////////
// Global array for employee names
const empArray = [];
// Global array for roles
const rolArray =[];

const questions = {
    start: [{
        type: 'list',
        name: 'initalPrompt',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all Employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
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
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Software Engineer', 'Mechanical Engineer', 'Associate Product Manager', 'Accountant'] 
        },
        {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: ['Matt Yang', 'Scott Lee', 'Vanessa Yang', 'Jessica Moua']
        },
    ],
    updateRole: [
        {
        type: 'list',
        name: 'name',
        message: "Which employee's role do you want to update?",
        choices: empArray
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which role do you want to assign the selected employee?',
        choices: rolArray
    }
    ],
}

//////////////          Functions               //////////////

// Try it with an async arrow function
const startPrompt = async () => {
    let result = await inquirer.prompt(questions.start);
    return result    
};

async function viewDeparments(){
    const results = await queryDepartments();
    console.table(results);
}

async function viewRoles(){
    const results = await queryRoles();
    console.table(results);
};

async function viewEmployees(){
    //WHEN I choose to view all employees, THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    const results = await queryEmployees();
    console.table(results);
};
// practices with async arrow function
const addDepartment = async ()=>{
    let result = await inquirer.prompt(questions.addDepartment);
    await insertDepartment(result.newDepartment);
    console.log('New department added');
};

const addRole =  async () =>{
    let result = await inquirer.prompt(questions.addRole);
    await insertRole(result);
    console.log('New role added')
};

async function addEmployee(){
    let result = await inquirer.prompt(questions.addEmployee);
    insertEmployee(result);
    console.log('New employee added')
};

async function updateRole(){
    //WHEN I choose to update an employee role, THEN I am prompted to select an employee to update and their new role and this information is updated in the database
    // WE need the employee id so we can update the profile
    // CAll queryEmployees to get list of all employees
    const employees = await queryEmployees();
    // put employees first name into array so we can prompt each name with inquirer
    employees.forEach(Element => {
        empArray.push(Element.first_name);
    });

    // Call queryRoles to get roles and add to questions in prompt
    const roles = await queryRoles();
    roles.forEach(Element =>{
        rolArray.push(Element.title);
    });
    let emp = await inquirer.prompt(questions.updateRole);
    console.log(emp.name);
    console.log(emp.role);

    // Things I need name, new role, new role_id,
    // use new roll to get role_id
    let newRole_id = ''
    const rolesAgain = await queryRoles();
    rolesAgain.forEach(Element => {
        if (Element.title === emp.role){
            console.log(Element)
            newRole_id = Element.id;
        }
    })
    console.log(newRole_id);
    await updateEmployee(emp.name, newRole_id);

};

///////////////         Init function           ///////////////
async function init(){
    let cont = true;
    while(cont === true){
        const results = await startPrompt();
        switch (results.initalPrompt){
            case 'View all departments':
                await viewDeparments();
                break;
            case 'View all roles':
                await viewRoles();
                break;
            case 'View all Employees':
                await viewEmployees();
                break;
            case 'Add a department':
                await addDepartment();
                break;
            case 'Add a role':
                await addRole();
                break;
            case 'Add an employee':
                await addEmployee();
                break;
            case 'Update an employee role':
                await updateRole();
                break;
            case 'Exit':
                console.log('You have exited! Have a good day!');
                cont = false;
                break;
            default:
                console.log("default");
                break
        }
    }
}

init()
