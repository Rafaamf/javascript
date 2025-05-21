const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('tasks');
  if (saved) {
    taskList.innerHTML = saved;
    addListeners();
  }
});

addBtn.addEventListener('click', () => {
  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.innerHTML = `${input.value}<button class="delete">X</button>`;
  taskList.appendChild(li);
  input.value = '';
  saveTasks();
  addListeners();
});

function addListeners() {
  const items = taskList.querySelectorAll('li');
  items.forEach(li => {
    li.onclick = () => {
      li.classList.toggle('done');
      saveTasks();
    };
    li.querySelector('.delete').onclick = (e) => {
      e.stopPropagation();
      li.remove();
      saveTasks();
    };
  });
}

function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}
