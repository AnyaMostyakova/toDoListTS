var todoInput = document.querySelector('.todo_input');
var todoButton = document.querySelector('.todo_button');
var todoList = document.querySelector('.todo_list');
var filterOption = document.querySelector('.filter_todo');
if (todoButton) {
    todoButton.addEventListener("click", addTodo);
}
if (todoList) {
    todoList.addEventListener("click", deleteCheck);
}
if (filterOption) {
    filterOption.addEventListener("click", filterTodo);
}
function addTodo(event) {
    event.preventDefault();
    if (todoInput.value.trim() === "") {
        alert("Вы вводите пустую строку!");
        return;
    }
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if (todoInput.value === "") {
        return null;
    }
    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);
    if (todoList) {
        todoList.appendChild(todoDiv);
    }
    todoInput.value = "";
}
function deleteCheck(e) {
    var item = e.target;
    //DELETE ITEM
    if (item.classList.contains("delete_btn")) {
        var todo_1 = item.parentElement;
        //ANIMATION TRANSITION
        if (todo_1) {
            todo_1.classList.add("fall");
            todo_1.addEventListener('transitionend', function () {
                if (todo_1) {
                    todo_1.remove();
                }
            });
        }
    }
    if (item.classList.contains("complete_btn")) {
        var todo = item.parentElement;
        if (todo) {
            todo.classList.toggle("completedItem");
        }
    }
}
function filterTodo(e) {
    var todos = todoList === null || todoList === void 0 ? void 0 : todoList.childNodes;
    if (todos) {
        for (var i = 1; i < todos.length; i++) {
            switch (e.target.value) {
                case "all":
                    todos[i].style.display = "flex";
                    break;
                case "completed":
                    if (todos[i].classList.contains('completedItem')) {
                        todos[i].style.display = "flex";
                    }
                    else {
                        todos[i].style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todos[i].classList.contains('completedItem')) {
                        todos[i].style.display = "flex";
                    }
                    else {
                        todos[i].style.display = "none";
                    }
                    break;
            }
        }
    }
}
//# sourceMappingURL=todoList.js.map