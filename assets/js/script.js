var formEl = document.querySelector("#task-form");
var taskstoDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

//event to handle submission of data
var taskFormHandler = function(event){
  event.preventDefault();

  // selects the input values from the input fields
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value
  //ensures user added something in the field 
  if(!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }
  //if user input is valid, it will submit and then reset the input field
  formEl.reset();
  console.log(taskTypeInput);
  // saves the input to be passed as an argument to another function
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
    //allows the var taskDataObj to be used in the createTaskEl function
    createTaskEl(taskDataObj);
 


}
//call the taskDataObj var
var createTaskEl = function(taskDataObj){
  //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = ("task-item");

  //adds custon attribute of task-id
  listItemEl.setAttribute("data-task-id", taskIdCounter);
//crate div element inside that will contain data inside of li
var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
// sets inner html text using data from taskDataObj var 
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    //appends the div to the li
    listItemEl.appendChild(taskInfoEl);
    //appends li to the ul element
    taskstoDoEl.appendChild(listItemEl);

    taskIdCounter++;

}

var createTaskActions = function(taskId){
  // creates div and gives class name of task actions
var actionContainerEl =document.createElement("div");
actionContainerEl.className = "task-actions";

// creates a button witha class name of edit-btn and set the data attribute to task-id, and passes the data to the 
var editButtonEl = document.createElement("button");
editButtonEl.textContent = "edit";
editButtonEl.className = "btn edit-btn";
editButtonEl.setAttribute("data-task-id",taskId)

actionContainerEl.appendChild(editButtonEl);

// creates the delete button
var deleteButtonEl = document.createElement("div");
deleteButtonEl.textContent = "delete"
deleteButtonEl.className = "btn delete-btn"
deleteButtonEl.setAttribute("data-task-id",taskId);

actionContainerEl.appendChild(deleteButtonEl);

var statusSelectEl = document.createElement("select");
statusSelectEl.className = "select-status";
statusSelectEl.setAttribute("name", "status-change");
statusSelectEl.setAttribute("data-task-id",taskId);

actionContainerEl.appendChild(statusSelectEl);

var statusChoices = ["To Do","In Progress","Completed"];

for( var i =0;i < statusChoices.length; i++){
  //create option element
  var statusOptionEl = document.createElement("option");
  statusOptionEl.textContent = statusChoices[i];
  statusOptionEl.setAttribute("value",statusChoices[i]);

  //append to select
  statusSelectEl.appendChild(statusOptionEl);
}

return createTaskActions();


}

formEl.addEventListener("submit", taskFormHandler);

