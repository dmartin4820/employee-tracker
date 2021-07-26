INSERT INTO department (id, name)
VALUES (000, "Physics"),
       (001, "Computer Science");

INSERT INTO employee_role (id, title, salary, department_id)
VALUES (000, "Professor", 100000.00, 000),
       (001, "Graduate Student", 40000.00, 000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (000, "Ernst", "Rutherford", 000, NULL),
       (001, "Niels", "Bohr", 001, 000);