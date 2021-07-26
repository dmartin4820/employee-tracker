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

	showDepartments() {
		this._db.query('SELECT * FROM departments', (err, results) => {
			if (err) throw err;
			console.table(results);
		});
	}

	showRoles() {
		this._db.query('SELECT * FROM employee_roles', (err, results) =>{
			if (err) throw err;
			console.table(results);
		});
	}

	showEmployees() {
		this._db.query('SELECT * FROM employees', (err, results) =>{
			if (err) throw err;
			console.table(results);
		});
	}
}

module.exports = Database;