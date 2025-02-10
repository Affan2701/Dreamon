// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskText) {
  const li = document.createElement('li');
  li.classList.add('task-item');

  const textNode = document.createTextNode(taskText);
  li.appendChild(textNode);

  // Add 'completed' toggle functionality
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Add delete button to each task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent clicking from triggering the toggle event
    li.remove();
  });

  li.appendChild(deleteButton);

  taskList.appendChild(li);
}

// Event listener for Add Task button
addButton.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    createTaskItem(taskText);
    taskInput.value = ''; // Clear input field
  } else {
    alert('Please enter your goals.');
  }
});

// Optional: Allow pressing 'Enter' to add task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addButton.click();
  }
});
