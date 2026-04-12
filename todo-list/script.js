const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = input.value.trim();
  if(!value) return;
  
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.innerHTML = `<span>${value}</span> <button class="delete-btn">X</button>`;
  
  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => li.remove());
  
  list.appendChild(li);
  input.value = '';
});
