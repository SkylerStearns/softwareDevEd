// Create Secret Number
var secretNumber = 4;

// Ask user for guess
var guess = Number(prompt('Guess a number'));

// Check if guess is correct
if(guess === secretNumber) {
  alert('You got it right!');
}

// Otherwise, check if higher
else if (guess > secretNumber) {
  alert('Too High!');
}

// Otherwise, check if lower
else {
  alert('Too Low!');
}