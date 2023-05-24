const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
    toDoList.scrollTop = toDoList.scrollHeight;
}

function handleToDoSubmit(event) {
    event.preventDefault();
    if (toDoInput.value.trim() !== "") {
        const newTodo = toDoInput.value;
        const newToDoObj = {
            text: newTodo,
            id: Date.now(),
        }
        toDos.push(newToDoObj);
        paintTodo(newToDoObj);
        saveToDos();
    }
    toDoInput.value = "";
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}