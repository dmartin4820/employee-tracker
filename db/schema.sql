DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
	id INT NOT NULL,
	name VARCHAR(100),
	PRIMARY KEY (id)
);

CREATE TABLE employee_role (
	id INT NOT NULL,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL(10,2) NOT NULL,
	department_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id)
	REFERENCES department(id)
	ON DELETE SET NULL
);

CREATE TABLE employee (
	id INT NOT NULL,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INT,
	manager_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (role_id)
	REFERENCES employee_role(id)
	ON DELETE SET NULL,
	FOREIGN KEY (manager_id)
	REFERENCES employee(id)
	ON DELETE SET NULL
);