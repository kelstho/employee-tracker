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
  list();
});

function list() {
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

const selection = [{
  name: "selection",
  type: "list",
  message: "Would you like to make another selection?",
  choices: ["Yes", "No"]
}];

function viewDepts() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    console.log("------------------------------------------");
    inquirer
      .prompt(selection)
      .then((answer) => {
        if (answer.selection === "No") {
          console.log("Thank you, goodbye!");
          connection.end(); 
        } else {
        list();
        }
      })
  });
};

function viewRoles() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    console.log("------------------------------------------");
    inquirer
      .prompt(selection)
      .then((answer) => {
        if (answer.selection === "No") {
          console.log("Thank you, goodbye!");
          connection.end(); 
        } else {
        list();
        }
      })
  });
};

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    console.log("------------------------------------------");
    inquirer
      .prompt(selection)
      .then((answer) => {
        if (answer.selection === "No") {
          console.log("Thank you, goodbye!");
          connection.end(); 
        } else {
        list();
        }
      })
  });
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