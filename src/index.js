document.addEventListener("DOMContentLoaded", () => {
  // Select the form and the tasks list
  const form = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  // Add event listener to the form
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const newTaskDescription = document.getElementById("new-task-description").value;

    //New list item for the task
    const newTask = document.createElement("li");
    newTask.textContent = newTaskDescription;

    // Delete button for the task
    const deleteButton = document.createElement("button");
    
    deleteButton.addEventListener("click", function() {
      tasksList.removeChild(newTask);
      
    });
// Append the delete button to the task
newTask.appendChild(deleteButton);

// Append the new task to the tasks list
tasksList.appendChild(newTask);

// Clear the input field
document.getElementById("new-task-description").value = "";
    
  });
});
