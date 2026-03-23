const darkToggle = document.getElementById('darkModeToggle');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

darkToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();

// Add Task
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const dueDate = document.getElementById('dueDateInput').value;
    const priority = document.getElementById('priorityInput').value;
  
    if (!taskText) return alert('Please enter a task!');
  
    const newTask = {
      text: taskText,
      completed: false,
      dueDate,
      priority
    };
  
    tasks.push(newTask);
    updateLocalStorage();
    renderTasks();
    taskInput.value = '';
    document.getElementById('dueDateInput').value = '';
    document.getElementById('priorityInput').value = 'Normal';
  });
  

// Render Task List
function renderTasks(filter = 'all') {
  taskList.innerHTML = '';

  let filteredTasks = tasks;
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === 'pending') {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  filteredTasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <span contenteditable="true" class="editable">${task.text}</span>
      <div>
        <button onclick="toggleComplete(${index})">✔️</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;

    // Edit handler
    li.querySelector('.editable').addEventListener('blur', (e) => {
      tasks[index].text = e.target.textContent.trim();
      updateLocalStorage();
    });

    taskList.appendChild(li);
  });
}

// Toggle complete
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  updateLocalStorage();
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  updateLocalStorage();
  renderTasks();
}

// Update localStorage
function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Filter buttons 
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('filterAll').addEventListener('click', () => renderTasks('all'));
    document.getElementById('filterPending').addEventListener('click', () => renderTasks('pending'));
    document.getElementById('filterCompleted').addEventListener('click', () => renderTasks('completed'));
  });
  