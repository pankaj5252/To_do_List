// Function to add a new todo item
function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task !== '') {
        const list = document.getElementById('todo-list');
        const newItem = document.createElement('li');
        newItem.className = 'todo-item';
        newItem.innerHTML = `
        <div class="mt-3">
        <input type="checkbox" onchange="toggleTask(this)">
        <span>${task}</span>
        </div>
        <button class="delete-btn btn btn-danger mt-3 btn-sm float-end" onclick="deleteTodo(this)">Delete</button>
      `;
        list.appendChild(newItem);
        input.value = '';
    }
}

// Function to delete a todo item
function deleteTodo(btn) {
    const item = btn.parentNode;
    item.parentNode.removeChild(item);
}

// Function to toggle task completion
function toggleTask(checkbox) {
    const task = checkbox.nextElementSibling;
    if (checkbox.checked) {
        task.style.textDecoration = 'line-through';
    } else {
        task.style.textDecoration = 'none';
    }
}