# Employee Tracker
This is a CLI that allows the user to view, track, and update various information about their company utilizing MySQL and Inquirer. The user can view or add departments, roles, and employees. They can also update the roles of various employees.
![Example Gif](employee_tracker.gif)

## Instructions
Run the schema.sql and seed.sql files in MySQL Workbench to create the required database. After that, simply run 'node index.js' to start the application. A list will appear with options to view or add departments, roles, and employees, or update employee roles. If the user chooses to view one of the options, a table will be displayed containing index, id, and various other information about the selection. Another option will appear asking the user if they would like to make another selection. If yes, they will once again be directed to the list of options. If no, the application will quit itself. If the user chooses to add a new department, role, or employee, they will be prompted to enter the appropriate information about their selection. Once completed, they will again be prompted to either make another selection or quit the application. If the user chooses to update the role of an employee, they will be prompted to enter the id number of the employee, and then the id number of their new role. Once this is completed, they will once again be prompted to either make another selection or quit the app.

## Technologies
Frameworks/Libraries: MySQL, Inquirer