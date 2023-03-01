// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing tasks
const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num = 0;
let c;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable.
let userInput = prompt(menu).toUpperCase();

// Loops and continues to the menu until the user ends/closes the Task Manager (AKA Until the user enters CLOSE)
while (userInput !== `CLOSE`){
    showTasks = ``;
    for (index in tasks){
        c = index;
        c++;
        showTasks += (`\n` + c + `: ` + tasks[index]);
    }
    if (userInput == `TASKS`){
        alert(tasks.join(`\n`));
    } else if (userInput == `NEW`){
        newTask = ``;
        while (newTask == ``){
            newTask = prompt(`Please enter the new task: `);
        }
        tasks.push(newTask);
        alert(newTask + ' has been added');
    } else if (userInput == `REMOVE`){
        num = parseInt(prompt(`Please enter a number to remove: ` + showTasks));
        while (!num || num < 1 || num > c){
            alert("Not a valid entry");
            num = parseInt(prompt(`Please enter a number to remove: ` + showTasks));
        }
        num--;
        removed = tasks.splice(num, 1);
        alert(`"` + removed + `" has been removed`);
    }
    userInput = prompt(menu).toUpperCase();
}

// Alerts the user that they have closed the program
alert(`Thank you for using the Task Manager`);