const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "XDweAkU(ed3Gp",
  database: "company_db"
});

connection.connect((err) => {
  if (err) throw err;
  console.log("------------------------------------------")
  console.log("Welcome to the Employee Management System!");
  console.log("------------------------------------------")
  start();
});

function start() {
  inquirer
    .prompt({
      name: "options",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role"
      ]
    })
    .then((answer) => {
      switch (answer.options) {
        case "View all departments":
          viewDepts()
          break
        case "View all roles":
          viewRoles()
          break
        case "View all employees":
          viewEmployees()
          break
        case "Add a department":
          addDept()
          break
        case "Add a role":
          addRole()
          break
        case "Add an employee":
          addEmployee()
        case "Update employee role":
          updateEmployee()
          break
      }
    })
};

function viewDepts() {
  console.log("view depts");
};

function viewRoles() {
  console.log("view roles");
};

function viewEmployees() {
  console.log("view employees");
};

function addDept() {
  console.log("add dept");
};

function addRole() {
  console.log("add role");
};

function addEmployee() {
  console.log("add employee");
};

function updateEmployee() {
  console.log("update employee");
};