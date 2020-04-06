let todos = [];

let input = prompt('What would you like to do?');

while(input !== 'quit') {
  if(input === 'list') {
    listTodos()
  }
  else if (input === 'new') {
    createTodo()
  }
  else if (input === 'delete') {
    deleteTodo()
  }
  input = prompt('What would you like to do?');
}
console.log('User has quit the app.');


function listTodos() {
  console.log('**********');
  todos.forEach((todo, index) => {
    console.log(`${index}: ${todo}`);
  });
  console.log('**********');
}

function createTodo() {
  let newTodo = prompt('Enter new todo');
  console.log(`Added ${newTodo} to list.`);
  todos.push(newTodo);
}

function deleteTodo() {
  let index = prompt('Which todo would you like to delete?');
  console.log(`Deleted ${todos[index]} from list.`);
  todos.splice(index, 1);
}
