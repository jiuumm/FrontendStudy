const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("toDos", toDos);
}
function deleteToDo(event) {
  const li = event.target.parentElement; //버튼의 부모에 접근
  li.remove();
}
function painToDo(newTodo) {
  //todolist의 입력값을 넣었던 것 처리
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); //버튼을 눌렀을 때 삭제하는리스너
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault(); //새로고침 되는 거 막기
  const newTodo = toDoInput.value; //value값 저장
  toDoInput.value = ""; // 입력창은 비워준다.
  toDos.push(newTodo); //toDos라는 배열에 투두리스트 넣어주기
  painToDo(newTodo);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
