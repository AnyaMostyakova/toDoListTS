const todoInput = document.querySelector('.todo_input') as HTMLInputElement;
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

if (todoButton) {
    todoButton.addEventListener("click", addTodo);
}

if (todoList) {
    todoList.addEventListener("click", deleteCheck);
}

if (filterOption) {
    filterOption.addEventListener("click", filterTodo);
}

function addTodo(event: Event) {
    event.preventDefault();
    if (todoInput.value.trim() === "") {
        alert("Вы вводите пустую строку!");
        return;
    }
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === "") {
        return null;
    }
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);
    if (todoList) {
        todoList.appendChild(todoDiv);
    }
    todoInput.value = "";
}

function deleteCheck(e: MouseEvent) {
    const item = e.target as HTMLElement;
    //DELETE ITEM
    if (item.classList.contains("delete_btn")) {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        if (todo) {
            todo.classList.add("fall");
            todo.addEventListener('transitionend', function () {
                if (todo) {
                    todo.remove();
                }
            });
        }
    }
    if (item.classList.contains("complete_btn")) {
        const todo = item.parentElement;
        if (todo) {
            todo.classList.toggle("completedItem");
        }
    }
}

function filterTodo(e: Event) {
    const todos = todoList?.childNodes;
    if (todos) {
        for (let i = 1; i < todos.length; i++) {
            switch ((e.target as HTMLSelectElement).value) {
                case "all":
                    (todos[i] as HTMLElement).style.display = "flex";
                    break;
                case "completed":
                    if ((todos[i] as HTMLElement).classList.contains('completedItem')) {
                        (todos[i] as HTMLElement).style.display = "flex";
                    } else {
                        (todos[i] as HTMLElement).style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!(todos[i] as HTMLElement).classList.contains('completedItem')) {
                        (todos[i] as HTMLElement).style.display = "flex";
                    } else {
                        (todos[i] as HTMLElement).style.display = "none";
                    }
                    break;
            }
        }
    }
}