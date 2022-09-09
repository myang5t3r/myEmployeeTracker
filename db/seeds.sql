INSERT INTO departments (departmentName)
VALUES ("Engineering"),
       ("Sales"),
       ("Product"),
       ("Finance");

INSERT INTO roles (title, salary, department_id)
VALUES ("Senior Software Engineer", 130000, 001), 
       ("Software Engineer", 100000, 001),
       ("Mechanical Engineer", 70000, 001),
       ("Senior Sales Engineer", 115000, 002 ),
       ("Senior Product Manager", 160000, 003),
       ("Associate Product Manager", 80000, 003),
       ("Accountant", 80000, 004),
       ("CPA Accountant", 120000, 004);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Matt", "Yang", 001, NULL), 
       (002, "Scott", "Lee", 004, NULL),  
       (003, "David", "Lee", 006, 007),  
       (004, "Jack", "Lee", 002, 001),
       (005, "Tommy", "Yang", 003, 001),
       (006, "Vanessa", "Yang", 008, NULL), 
       (007, "Jessica", "Moua", 005, NUll),
       (008, "Susan", "Yang", 007, 006), 
       (009, "Nic", "Yang", 003, 001),  
       (010, "Rock", "Yang", 007, 006);
