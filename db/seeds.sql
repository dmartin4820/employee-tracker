INSERT INTO departments (name)
VALUES ("Physics"),
       ("Computer Science"),
       ("Math");

INSERT INTO employee_roles (id, title, salary, department_id)
VALUES (000, "Physics Professor", 100000.00, 001),
       (001, "Physics Graduate Student", 40000.00, 001),
       (002, "Computer Science Professor", 100000.00, 002),
       (003, "Computer Science Graduate Student", 40000.00, 002),
       (004, "Math Professor", 100000.00, 003),
       (005, "Math Graduate Student", 40000.00, 003);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (000, "Ernst", "Rutherford", 000, NULL),
       (001, "Niels", "Bohr", 001, 000),
       (002, "Hans", "Geiger", 001, 000),
       (003, "Patrick", "Blackett", 001, 000),
       (004, "Marie", "Curie", 000, NULL),
       (005, "Irene", "Joliot-Curie", 001, 004),
       (006, "Emmy", "Noether", 004, NULL),
       (007, "Grete", "Hermann", 005, 006),
       (008, "Donald", "Knuth", 002, NULL),
       (009, "Robert", "Sedgewick", 003, 008);
