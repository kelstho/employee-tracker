USE company_db;

INSERT INTO department (id, name)
VALUES (100, "IT"),
       (200, "Design"),
       (300, "Human Resources"),
       (400, "Accounting"),
       (500, "Marketing");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "IT Specialist", 120000, 100),
       (2, "Senior Designer", 150000, 200),
       (3, "Head Junior Designer", 80000, 200),
       (4, "Junior Designer", 52000, 200),
       (5, "HR Manager", 75000, 300),
       (6, "HR Specialist", 57000, 300),
       (7, "Head Accountant", 175000, 400),
       (8, "Accountant", 90000, 400),
       (9, "Marketing Manager", 160000, 500),
       (10, "Copywriter", 55000, 500);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Bill", "Burns", 1, null),
       (2, "Sandra", "Chulapa", 1, null),
       (3, "Valerie", "DelRio", 2, null),
       (4, "Gretchen", "Gustavo", 3, 3),
       (5, "José", "Herrera", 4, 4),
       (6, "Jim", "Beans", 4, 4),
       (7, "Katie", "Smith", 5, null),
       (8, "Ben", "Benderson", 6, 7),
       (9, "Kent", "Clarkson", 6, 7),
       (10, "Wendy", "Viramontes", 7, null),
       (11, "John", "Johnson", 8, 10),
       (12, "Will", "Williamson", 8, 10),
       (13, "Jenny", "Vu", 9, null),
       (14, "Paul", "Paulerson", 10, 13),
       (15, "Tom", "Nook", 10, 13);