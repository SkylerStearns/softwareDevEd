var age = Number(prompt('What is your age?'));

if(age < 0) {
  alert('Come back once you\'re out of the womb');
}

if(age < 18) {
  alert('Sorry, not old enough!');
}

if(age < 21) {
  alert('No drinks for you!');
}

if(age === 21) {
  alert('Happy 21st Birthday!');
}
if(age >= 21) {
  alert('You may enter.');
}

if(age % 2 !== 0) {
  alert('Your age is odd.');
}

if(age % Math.sqrt(age) === 0) {
  alert('Your age is a perfect square!');
}