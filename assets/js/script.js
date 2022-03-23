var buttonE1 = document.querySelector("#save-task");
var taskstoDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(){
    var listItemEl = document.createElement("li");
    listItemEl.textContent = ("this is a new task")
    listItemEl.className = ("task-item");
  taskstoDoEl.appendChild(listItemEl);

}

buttonE1.addEventListener("click", createTaskHandler); {
    var listItemEl = document.createElement("li");
    listItemEl.textContent = ("this is a new task")
    listItemEl.className = ("task-item");
    taskstoDoEl.appendChild(listItemEl);
};

