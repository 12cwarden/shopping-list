const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const todolist = document.querySelectorAll(".todo-list");
const li = document.getElementsByTagName("li");
const clearBtn = document.getElementById("clear");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const div = document.createElement("div");
  const li = document.createElement("li");
  const delButton = document.createElement("button");
  ul.appendChild(div);
  div.appendChild(li);
  li.classList.add("taskClass");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createElement("span"));
  input.value = "";
  li.appendChild(delButton);
  delButton.classList.add("delClass");
  delButton.innerHTML = "Delete";
}

//--------------------------Add items to list
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//-------------------------Clear all items from list.
function clearAllAfterClick() {
  ul.innerHTML = "";
}

//-------------------------Strike out completed tasks & delete unneeded or accidental tasks.
function strikeThrough(task) {
  if (task.target.tagName === "LI") {
    task.target.classList.toggle("done");
  }
}

function deleteTask(task) {
  if (task.target.className === "delClass") {
    task.target.parentElement.remove();
  }
}

function deletePress(task) {
  strikeThrough(task);
  deleteTask(task);
}

//--------------------Event listeners
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", deletePress);

clearBtn.addEventListener("click", clearAllAfterClick);
