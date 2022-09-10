INSERT INTO departments (departmentName)
VALUES ("Engineering"),
       ("Sales"),
       ("Product"),
       ("Finance");

INSERT INTO roles (title, salary, department_id)
VALUES ("Senior Software Engineer", 130000, 001), 
       ("Senior Sales Engineer", 115000, 002 ),
       ("Senior Product Manager", 160000, 003),
       ("CPA Accountant", 120000, 004),
       ("Software Engineer", 100000, 001),
       ("Mechanical Engineer", 70000, 001),
       ("Associate Product Manager", 80000, 003),
       ("Accountant", 80000, 004);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Yang", 001, NULL), 
       ("Scott", "Lee", 002, NULL),  
       ("Jessica", "Moua", 005, NULL), 
       ("Vanessa", "Yang", 004, NULL), 
       ("Jack", "Lee", 005, 001),
       ("Tommy", "Yang", 005, 001),
       ("Nic", "Yang", 006, 001),
       ("David", "Lee", 007, 003),    
       ("Susan", "Yang", 006, 001), 
       ("Rock", "Yang", 008, 004);
       
