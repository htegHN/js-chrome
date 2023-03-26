const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//toDos array의 내용을 local storage에 담는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//x버튼을 클릭하면 li을 통째로 지워주는 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //바로 위에서 li를 지워줬으므로 이를 filter를 통해 toDos array에 적용시켜주는거다.
  //정리하면 toDos는 parsedToDos를 이용해 localStorage의 array를 가져온건데 위의 li를 지워주면 filter를 통해 기존의 localStorage에서 가져온 data와 일치하지 않게 되므로 바꿔주고 다시 toDos로 넣어주면 아래의 saveToDos 함수를 통해 localStorage에 다시 저장해준다.
  saveToDos();
}

//화면에 toDo를 출력하는 함수
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; //submit이 발생하면 newTodo.id가 li의 id로 입력된다.
  const span = document.createElement("span");
  span.innerText = newTodo.text; //argument는 newTodo지만 실제로는 newToDoObj로 바꼈기 때문에 text로 접근하기 위함
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo); //!! event handler는 호출되면 등록되는 독립적인 함수
  li.appendChild(span); // span을 li 안으로 집어넣음
  li.appendChild(button); // button을 li 안으로 집어넣음
  toDoList.appendChild(li); //li을 toDoList(ul)안으로 집어넣음
}

//(Submit 눌렀을 때 새로고침을 막고, newToDo 변수를 선언해 입력된 toDoInput의 값을 넣어준다.
//그리고 input 창을 비워주고, toDos라는 array에 앞서 선언한 newToDo를 넣어준다. 이후 paintToDo 함수를 실행하고,
//saveToDos 함수를 통해 localStorage에 저장한다.)
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    //object 형식으로 data를 저장해줌.
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //localStorage에서 저장된 데이터들을 string으로 가져옴

//새로고침했을 때 정보를 다시 불러오는 함수 (먼저 실행되는 제어문이나 함수 호출이 없으므로 가장 먼저 실행됨)
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //localStorage에서 가져온 savedToDos를 parsing해오기
  toDos = parsedToDos; //localStorage에서 parsing 해온 data를 새로고침했을 때 비어있는 toDos array에 다시 넣어주기
  parsedToDos.forEach(paintToDo); //local Storage의 각 item들을 paintToDo 시키기
}
