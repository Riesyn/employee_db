

mainMenu = () => {
    inquirer.promt([
        {
            addDe
        }
    ])


    addDepartment = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'department',
                message: 'Enter the name of the department you would like to add.'
            }
        ]).then((answer) => {
            connection.query('INSERT INTO department (name) VALUES (?)', [answer.department], (err, res) => {
                if (err) throw err;
                console.log('Department added successfully!');
                mainMenu();
            });
        });
    }