INSERT INTO department (id, name)
VALUES (001, "Engineer Department"),
       (002, "Sales Department"),
       (003, "Product Department");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Mehancincal Engineer", 110000, 001),
       (002, "Sales Engineer", 100000, 002 ),
       (003, "Product Manager", 100000, 003),
       (004, "Software Engineer", 130000, 001);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Matt", "Yang", 004, 001),
       (002, "Scott", "Lee", 002, NULL),
       (003, "David", "Lee", 001, 001),
       (004, "Jack", "Lee", 003, 001);


