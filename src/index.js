document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const submit = document.getElementById('submit');

const ul = document.getElementById('tasks');
//function to add items to the list
function addItems () {
//create list element 
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = input.value;
  li.appendChild(span)
  ul.appendChild(li);
  input.value = '';
//create a button
  const button = document.createElement('button');
  button.textContent = 'clear';
  button.style.color = 'red';
  li.appendChild(button);
//event listener to delete items from the list

button.addEventListener('click', () => {
  li.remove();
});


//create a dropdown menu to prioritize an item
    const select = document.createElement('select');
//create an option fiels
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    option1.textContent = 'High priority';
    option2.textContent = 'Medium priority';
    option3.textContent = 'Low priority';
    option1.value = 'High priority';
    option2.value = 'Medium priority';
    option3.value = 'Low priority';
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    li.appendChild(select);
//if statement to mark order of priority
select.addEventListener('change', () => {
if (select.value === 'High priority') {
  li.style.background = 'red';
}else if (select.value === 'Medium priority') {
  li.style.background = 'yellow';
}else {
  li.style.background = 'green';
}
});

//function to edit a task
  const edit = document.createElement('button');
  edit.textContent = '✏️';
  li.appendChild(edit)

edit.addEventListener('click', () => {
//e.preventDefault();
  const originalText = span.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = originalText;
  li.replaceChild(input, span)
  input.focus();

  input.addEventListener('blur', () => {
    saveEdit(input, span, li);
  });
  input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
      saveEdit(input, span, li);
    }
  })
});
}
//function to save the new item 
function saveEdit(input, span, li) {
  span.textContent = input.value.trim();
  li.replaceChild(span, input);
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addItems();
});
});
