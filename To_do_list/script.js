const toDoListItemsBlock = document.querySelector('.toDoListItemsBlock');
const addInput = document.querySelector('.toDoListAddInput');
const addButton = document.querySelector('.toDoListAddButton');


initToDo();

function initToDo() {
    const tasks = getTasksFromStorage();
    
    let template = '';
    tasks.forEach(task => {
        template += getTemplate(task);
        
    });
    toDoListItemsBlock.innerHTML += template;
}


addButton.addEventListener('click', addToDo);
addInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addToDo();
    }
});


function addToDo() {
    const inputText = addInput.value;
    
    const task = {
        id: idGenerator(),
        text: inputText
    };
    
    const template = getTemplate(task);
    toDoListItemsBlock.innerHTML += template;
    addInput.value = '';
    
    
    const tasks = getTasksFromStorage()
    
    tasks.push(task);
    setTasksToStorage(tasks);
}


function deleteToDo(event) {
    const toDoListItem = event.target.closest('.toDoListItem');
    const taskId = toDoListItem.getAttribute('data-id');
    
    toDoListItem.remove();
    removeTaskFromStorage(taskId);
    
}

function getTemplate(task) {
    return ` <div class="toDoListItem" data-id="${task.id}">
                <button class="toDoListRemoveButton" type="button"><i class="fa fa-trash" onclick="deleteToDo(event)"></i></button>
                <h1>${task.text}</h1>
            </div>`;
}

function getTasksFromStorage() {
    const tasks = localStorage.getItem('tasks');
    return JSON.parse(tasks) || [];
}

function setTasksToStorage(tasks) {
    const tasksString = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksString);
    
}

function removeTaskFromStorage(taskId) {
    const tasks = getTasksFromStorage();
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasksToStorage(filteredTasks);
    
    
}

function idGenerator() {
    return Math.random().toString(32).slice(2);
}
