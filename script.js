// Ading new items to list
const input = document.querySelector('input');

const addItem = () => {
  let ul = document.querySelector('ul');
  let string = `<li><span class="todo-text" onclick="complete(this)">${input.value}</span><i class="far fa-trash-alt" onclick="removeItem(this)"></i></li>`;
  ul.insertAdjacentHTML('beforeend', string);
  input.value = '';
}

input.addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    addItem();
  }
});

// Marking items as complete/not complete
const complete = (item) => {
  item.classList.toggle('complete');
}

// Deleting items from list
const removeItem = (item) => {
  item.parentNode.parentNode.removeChild(item.parentNode);
}



