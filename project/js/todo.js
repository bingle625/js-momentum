const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const todoAray = [];

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todoAray));
}

function deleteTodo(event){
    li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener("click",deleteTodo);
}

function handleToSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    todoAray.push(newTodo);
    saveTodo();
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit",handleToSubmit);