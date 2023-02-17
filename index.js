// Get references to the HTML elements we'll be using
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Create an array to hold our tasks
let tasks = [];

// Add a click event listener to the add button
addButton.addEventListener("click", function () {
  // Get the task from the input field
  const task = taskInput.value;

  // Add the task to our array
  tasks.push(task);

  // Clear the input field
  taskInput.value = "";

  // Refresh the task list
  refreshTaskList();
});

// Create a function to refresh the task list
function refreshTaskList() {
  // Clear the task list
  taskList.innerHTML = "";

  // Loop through our tasks and create an <li> element for each one
  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    // Add the task text to the <li> element
    li.textContent = task;

    // Add a click event listener to mark the task as complete
    li.addEventListener("click", function () {
      tasks.splice(index, 1);
      refreshTaskList();
    });

    // Add the <li> element to the task list
    taskList.appendChild(li);
  });
}
