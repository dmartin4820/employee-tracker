INSERT INTO departments (name)
VALUES ("Physics"),
       ("Computer Science"),
       ("Math");

INSERT INTO employee_roles (title, salary, department_id)
VALUES ("Physics Professor", 100000.00, 001),
       ("Physics Graduate Student", 40000.00, 001),
       ("Computer Science Professor", 100000.00, 002),
       ("Computer Science Graduate Student", 40000.00, 002),
       ("Math Professor", 100000.00, 003),
       ("Math Graduate Student", 40000.00, 003);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Ernst", "Rutherford", 001, NULL),
       ("Niels", "Bohr", 002, 001),
       ("Hans", "Geiger", 002, 001),
       ("Patrick", "Blackett", 002, 001),
       ("Marie", "Curie", 001, NULL),
       ("Irene", "Joliot-Curie", 002, 005),
       ("Marguerite", "Perey", 002, 005),
       ("Emmy", "Noether", 005, NULL),
       ("Grete", "Hermann", 006, 008),
       ("Hans", "Fitting", 006, 008),
       ("Donald", "Knuth", 003, NULL),
       ("Robert", "Sedgewick", 004, 011),
       ("Scott", "Kim", 004, 011),
       ("Andrei", "Broder", 004, 011)
