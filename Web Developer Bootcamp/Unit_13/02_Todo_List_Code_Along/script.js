let todos = [];

let input = prompt('What would you like to do?');
console.log(input);

while(input !== 'quit') {
  if(input === 'list') {
    console.log(todos);
  }
  else if (input === 'new') {
    let newTodo = prompt('Enter new todo');
    todos.push(newTodo);
  }
  //ask again for new input
  input = prompt('What would you like to do?');
}
console.log('User has quit the app.');