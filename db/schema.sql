DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
	id INT NOT NULL,
	name VARCHAR(100),
	PRIMARY KEY (id)
);

CREATE TABLE employee_roles (
	id INT NOT NULL,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL(10,2) NOT NULL,
	department_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id)
	REFERENCES departments(id)
	ON DELETE SET NULL
);

CREATE TABLE employees (
	id INT NOT NULL,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INT,
	manager_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (role_id)
	REFERENCES employee_roles(id)
	ON DELETE SET NULL,
	FOREIGN KEY (manager_id)
	REFERENCES employees(id)
	ON DELETE SET NULL
);