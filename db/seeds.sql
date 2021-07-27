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

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (000, "Ernst", "Rutherford", 001, NULL),
       (001, "Niels", "Bohr", 002, 000),
       (002, "Hans", "Geiger", 002, 000),
       (003, "Patrick", "Blackett", 002, 000),
       (004, "Marie", "Curie", 001, NULL),
       (005, "Irene", "Joliot-Curie", 002, 004),
       (006, "Emmy", "Noether", 005, NULL),
       (007, "Grete", "Hermann", 006, 006),
       (008, "Donald", "Knuth", 003, NULL),
       (009, "Robert", "Sedgewick", 004, 008);
