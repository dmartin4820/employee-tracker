const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const Database = require('./lib/database');

function addEmployee() {
	inquirer
		.prompt([{
			type: 'input',
			name: 'employeeFirst',
			message: 'Employee first name: '
		}, {
			type: 'input',
			name: 'employeeLast',
			message: 'Employee last name: '
		}, {
			type: 'input',
			name: 'employeeRole',
			message: `Enter the employee's role`
		}, {
			type: 'input',
			name: 'employeeManager',
			message: `Enter the employee's manager`
		}])
		.then (({employeeFirst, employeeLast, employeeRole, employeeManager}) => {
			//add employee
		})
}

async function addRole() {
	const {roleName, roleSalary, roleDepartment} = 
	await inquirer
		.prompt([{
			type: 'input',
			name: 'roleName',
			message: 'Enter the name of the role'
		}, {
			type: 'input',
			name: 'roleSalary',
			message: 'Enter the salary for the role',
			validate: (roleSalary) => {
				return roleSalary > 0 
				? true
				: 'Please enter a valid salary above or equal to 0'
			}
		},{	
			type: 'input',
			name: 'roleDepartment',
			message: 'Enter the department for the role'
		}])

	
}

async function addDepartment() {
	const {departmentName} = await inquirer
		.prompt({
			type: 'input',
			name: 'departmentName',
			message: 'Enter the name of the department',
			validate: (departmentName) => {
				return departmentName.length > 4 
				? true 
				: `Please enter a valid department with more that 4 characters`
			}
		});
	const response = await db.addDepartment(departmentName);
	console.log(`\n${response[0].affectedRows} row(s) affected at id at ${response[0].insertId}\n`)
}


async function startPrompt() {
	const {startOption} = await inquirer
		.prompt({
			type: 'list',
			name: 'startOption',
			message: 'Please choose one of the following options:',
			choices: [{name:'View all departments',
				   value: () => db.departments()},
				   {name: 'View all roles',
				    value: () => db.roles()},
				   {name: 'View all employees',
				    value: () => db.employees()},
				   {name: 'Add a department',
				    value: () => addDepartment()}]
				  //'Add a department', 'Add a role', 'Add an employee', 
				  //'Update an employee role']
		});
	
	await startOption();
	startPrompt();
}

const db = new Database('company_db');
startPrompt();