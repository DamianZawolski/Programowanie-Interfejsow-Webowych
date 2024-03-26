const form = document.getElementById('form');
const task = document.getElementById('task');
const taskList = document.getElementById('taskList');
const deletedTasks = [];




taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        deletedTasks.push(e.target.parentElement.firstChild.textContent);
        e.target.parentElement.remove();
    }
});


const clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    const tasks = taskList.children;
    for (let i = 0; i < tasks.length; i++) {
        deletedTasks.push(tasks[i].firstChild.textContent);
    }
    taskList.innerHTML = '';
});

const restore = document.getElementById('restore');
restore.addEventListener('click', function() {
    if (deletedTasks.length > 0) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = deletedTasks.pop();
        const button = document.createElement('button');
        button.className = 'btn btn-secondary float-end';
        button.textContent = 'X';
        li.appendChild(button);
        taskList.appendChild(li);
    }
});
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskValue = task.value;
    const dateValue = date.value;
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${taskValue} - ${dateValue}`;
    const button = document.createElement('button');
    button.className = 'btn btn-secondary float-end';
    button.textContent = 'X';
    li.appendChild(button);
    taskList.appendChild(li);

    task.value = '';
    date.value = '';
});

