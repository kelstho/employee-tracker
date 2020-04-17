const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    password: "XDweAkU(ed3Gp",
    database: "company_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
  });