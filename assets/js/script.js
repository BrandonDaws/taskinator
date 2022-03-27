var formEl = document.querySelector("#task-form");
var taskstoDoEl = document.querySelector("#tasks-to-do");


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
//crate div element inside that will contain data inside of li
var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
// sets inner html text using data from taskDataObj var 
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    //appends the div to the li
    listItemEl.appendChild(taskInfoEl);
    //appends li to the ul element
    taskstoDoEl.appendChild(listItemEl);

}

formEl.addEventListener("submit", taskFormHandler);

