const mysql = require('mysql2');

class Database {
	constructor(databaseName) {
		this._db = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '123456',
			database: databaseName
		});
	}

	async departments() {
		const results = await this._db.promise().execute('SELECT * FROM departments');
		return results[0];
	}

	async roles() {
		const results = await this._db.promise().execute(
			'SELECT employee_roles.id, employee_roles.title, departments.name, employee_roles.salary ' + 
			'FROM departments ' +
			'INNER JOIN employee_roles ' + 
			'ON departments.id=employee_roles.department_id'
		)
		return results[0];
	}

	async employees() {
		//const results = await this._db.promise().execute('SELECT * FROM employees');
		const results = await this._db.promise().execute(
			`SELECT employee.id, employee.first_name, employee.last_name, employee_roles.title, departments.name, employee_roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager ` + 
			'FROM employees employee ' +
			'INNER JOIN employees manager ' +
			'ON employee.id=manager.id ' +
			'INNER JOIN employee_roles ' +
			'ON employee.role_id=employee_roles.id ' +
			'INNER JOIN departments ' +
			'ON employee_roles.department_id=departments.id'
		);
		return results[0];	
	}
}

module.exports = Database;