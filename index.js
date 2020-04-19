const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
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
          break
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
  connection.query("SELECT * FROM department", (err, res) => {
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
  connection.query("SELECT * FROM role", (err, res) => {
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
  connection.query("SELECT * FROM employee", (err, res) => {
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
  inquirer
    .prompt([
      {
        name: "id",
        type: "number",
        message: "What is the id number of the new department?"
      },
      {
        name: "name",
        type: "input",
        message: "What is the name of the new department?"
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",
        {
          id: answer.id,
          name: answer.name,
        },
        (err) => {
          if (err) throw err;
          console.log("Your department was created successfully!");
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
        }
      );
    });
};

function addRole() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "number",
        message: "What is the id number of the new role?"
      },
      {
        name: "title",
        type: "input",
        message: "What is the title of the new role?"
      },
      {
        name: "salary",
        type: "number",
        message: "What is the salary of the new role?"
      },
      {
        name: "deptId",
        type: "number",
        message: "What is the department id of the new role?"
      }
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO role SET ?",
        {
          id: answer.id,
          title: answer.title,
          salary: answer.salary,
          department_id: answer.deptId
        },
        function (err) {
          if (err) throw err;
          console.log("Your new role was created successfully!");
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
        }
      );
    });
};

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "number",
        message: "What is the id number of the new employee?"
      },
      {
        name: "firstName",
        type: "input",
        message: "What is the first name of the new employee?"
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the last name of the new employee?"
      },
      {
        name: "roleId",
        type: "number",
        message: "What is the role id of the new employee?"
      },
      {
        name: "managerId",
        type: "number",
        message: "What is the manager id of the new employee? (can be blank)",
        default: 0
      }
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          id: answer.id,
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId
        },
        (err) => {
          if (err) throw err;
          console.log("Your new role was created successfully!");
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
        }
      );
    });
};

function updateEmployee() {
  inquirer
    .prompt([
      {
        name: "id",
        type: "number",
        message: "Id of employee you would like to update?",
      },
      {
        name: "roleId",
        type: "number",
        message: "What is the new role id for your employee?",
      }
    ]).then((answer) => {
      connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
          {
            role_id: answer.roleId
          },
          {
            id: answer.id
          }
        ],
        (err) => {
          if (err) throw err;
          console.log("Employee role updated successfully!");
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
        }
      )
    })
}
