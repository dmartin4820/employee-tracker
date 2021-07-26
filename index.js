const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

function addEmployee() {
	inquirer
		.prompt({
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
		})
		.then (({employeeFirst, employeeLast, employeeRole, employeeManager}) => {
			//add employee
		})
}

function addRole() {
	inquirer
		.prompt({
			type: 'input',
			name: 'roleName',
			message: 'Enter the name of the role'
		}, {
			type: 'input',
			name: 'roleSalary',
			message: 'Enter the salary for the role'	
		},{	
			type: 'input',
			name: 'roleDepartment',
			message: 'Enter the department for the role'
		})
		.then(({roleName, roleSalary, roleDepartment}) => {
			//add to database
		})	

}

async function addDepartment() {
	await inquirer
		.prompt({
			type: 'input',
			name: 'departmentName',
			message: 'Enter the name of the department'
		})
		//.then(({departmentName}) => {
		//	//add department to db
		//})	
}

async function startPrompt() {
	const startOption = await inquirer
		.prompt({
			type: 'list',
			name: 'startOption',
			message: 'Please choose one of the following options:',
			choices: ['View all departments', 'View all roles', 'View all employees',
				  'Add a department', 'Add a role', 'Add an employee', 
				  'Update an employee role']
		});
	return startOption;
}

function viewDepartments() {
	const db = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'company_db'
	},
	console.log('Successful connection to company_db')
	)

	db.query('SELECT * FROM department', (err, results) => {
		if (err) throw err;
		console.table(results)
	});
	
}

async function employeeTracker() {
	const {startOption} = await startPrompt();
	switch(startOption) {
		//case 'View all departments':

		//case 'View all roles':
		
		//case 'View all employees':
		case 'Add a department':
			console.log('Add dept')
			addDepartment();
			break;	
		case 'Add a role':
			addRole();
			break;
		
		case 'Add an employee':
			addEmployee();
			break;	
		case 'Update an employee role':
			updateEmployee(employee);
			break;
	}
}

//employeeTracker();

viewDepartments();