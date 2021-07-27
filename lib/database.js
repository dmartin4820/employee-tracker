const mysql = require('mysql2');
const cTable = require('console.table');

class Database {
	constructor(databaseName) {
		this._db = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '123456',
			database: databaseName
		});
	}

	async getDepartments() {
		const results = await this._db.promise().execute('SELECT * FROM departments');
		return results[0];
	}

	async getRoles() {
		const results = await this._db.promise().execute(
			'SELECT employee_roles.id, employee_roles.title, departments.name, employee_roles.salary ' + 
			'FROM departments ' +
			'INNER JOIN employee_roles ' + 
			'ON departments.id=employee_roles.department_id'
		)
		return results[0];
	}

	async getEmployees() {
		//const results = await this._db.promise().execute('SELECT * FROM employees');
		const results = await this._db.promise().execute(
			`SELECT employee.id, employee.first_name, employee.last_name, employee_roles.title, departments.name AS department, employee_roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager ` + 
			'FROM employees employee ' +
			'LEFT JOIN employees manager ' +
			'ON employee.manager_id=manager.id ' +
			'INNER JOIN employee_roles ' +
			'ON employee.role_id=employee_roles.id ' +
			'INNER JOIN departments ' +
			'ON employee_roles.department_id=departments.id'
		);
		return results[0];
	}

	async getManagers() {
		const results = await this._db.promise().execute(
			`SELECT manager.id, CONCAT(manager.first_name, ' ', manager.last_name) AS manager ` +
			'FROM employees employee ' + 
			'RIGHT JOIN employees manager ' +
			'ON employee.manager_id=manager.id ' +
			'WHERE NOT employee.first_name IS null ' +
			'GROUP BY manager.id'
		);

		return results[0];

	}
	async addDepartment(name) {
		const response = await this._db.promise().execute(
			`INSERT INTO departments (name) ` +
			`VALUES (?)`, [name]
		);
		return response[0];
	}
	
	async addRole(name, salary, department) {
		const response = await this._db.promise().execute(
			`INSERT INTO employee_roles (title, salary, department_id) ` +
			`VALUES (?, ?, ?)`, [name, salary, department]
		);
		return response[0];
	}

	async addEmployee(first, last, role_id, manager_id) {
		const response = await this._db.promise().execute(
			`INSERT INTO employees (first_name, last_name, role_id, manager_id) ` +
			`VALUES (?, ?, ?, ?)`, [first, last, role_id, manager_id]
		);
		return response[0];
	}
}

module.exports = Database;