const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const Database = require('./lib/database');

function printResponse(response) {
	return console.log(`\n${response.affectedRows} row(s) affected at id ${response.insertId}\n`)
}

async function prompt(questions) {
	const answers = await inquirer
		.prompt(questions)
	return answers;
}

async function updateRole() {
	const employees = await db.getEmployees();
	const roles = await db.getRoles(); 

	const questions = [{
		type: 'list',
		name: 'employeeToUpdate',
		message: 'Select an employee to update',
		choices: employees.map((employee) => `${employee.first_name} ${employee.last_name}`)
	}, {
		type: 'list',
		name: 'employeeNewRole',
		message: `Select an employee's new role`,
		choices: roles.map((role) => role.title)
	}];

	const {employeeToUpdate, employeeNewRole} = await prompt(questions);
	const employeeId = employees.find((employee) => `${employee.first_name} ${employee.last_name}` === employeeToUpdate).id;
	const roleId = roles.find((role) => role.title === employeeNewRole).id;
	const response = await db.updateRole(roleId, employeeId);
	printResponse(response);
}

async function addEmployee() {
	const roles = await db.getRoles();
	const managers = await db.getManagers();

	const questions = [{
			type: 'input',
			name: 'employeeFirst',
			message: 'Employee first name: '
		}, {
			type: 'input',
			name: 'employeeLast',
			message: 'Employee last name: '
		}, {
			type: 'list',
			name: 'employeeRole',
			message: `Select the role for employee`,
			choices: roles.map(role => role.title)
		}, {
			type: 'list',
			name: 'employeeManager',
			message: `Select the employee's manager`,
			choices: managers.map(manager => manager.manager) 
	}]
	const {employeeFirst, employeeLast, employeeRole, employeeManager} = await prompt(questions);
	const employeeRoleId = roles.find(({title}) => title === employeeRole).id;
	const employeeManagerId = managers.find(({manager}) => manager === employeeManager).id;
	const response = await db.addEmployee(employeeFirst, employeeLast, employeeRoleId, employeeManagerId);
	printResponse(response);
}

async function addRole() {
	const departments = await db.getDepartments();

	const questions = [{
			type: 'input',
			name: 'roleName',
			message: 'Enter the name of the role'
		}, {
			type: 'input',
			name: 'roleSalary',
			message: 'Enter the salary for the role',
			validate: (roleSalary) => {
				return roleSalary >= 0 
				? true
				: 'Please enter a valid salary above or equal to 0'
			}
		},{	
			type: 'list',
			name: 'roleDepartment',
			message: 'Enter the department for the role',
			//Get the department names as an array
			choices: departments.map(department => department.name)
	}]	
	
	const {roleName, roleSalary, roleDepartment} = await prompt(questions);
	//Get the department id associated with the department
	const roleDepartmentId = departments.find((department) => department.name === roleDepartment).id;
	const response = await db.addRole(roleName, roleSalary, roleDepartmentId);
	printResponse(response);	
}

async function addDepartment() {
	const questions = [{
			type: 'input',
			name: 'departmentName',
			message: 'Enter the name of the department',
			validate: (departmentName) => {
				return departmentName.length > 4 
				? true 
				: `Please enter a valid department with more that 4 characters`
			}
	}];
	const {departmentName} = await prompt(questions);
	const response = await db.addDepartment(departmentName);
	printResponse(response);
}

function printResults(results) {
	console.log('\n')
	console.table(results)
}

async function showEmployees() {
	const results = await db.getEmployees();
	printResults(results);
}
async function showRoles() {
	const results = await db.getRoles();
	printResults(results);
}
async function showDepartments() {
	const results = await db.getDepartments();
	printResults(results);	
}

async function startPrompt() {
	const questions = [{
			type: 'list',
			name: 'startOption',
			message: 'Please choose one of the following options:',
			choices: [{name:'View all departments',
				   value: showDepartments},
				   {name: 'View all roles',
				    value: showRoles},
				   {name: 'View all employees',
				    value: showEmployees},
				   {name: 'Add a department',
				    value: addDepartment},
				   {name: 'Add a role',
				    value: addRole},
				   {name: 'Add an employee',
				    value: addEmployee},
				   {name: `Update an employee's role`,
				    value: updateRole}]
	}];
	const {startOption} = await prompt(questions);
	await startOption();
	startPrompt();
}

const db = new Database('company_db');
startPrompt();