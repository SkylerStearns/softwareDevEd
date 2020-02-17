// Incrementally count through a given length of numbers.
var num = 0;

while(num < 10) {
  console.log('The count is currently set to: ' + num);
  num++;
}

// Incrementally count through the characters of a string.
//string we're looping over
var str = "hello";

//first character is set to index 0
var count = 0;

while (count < str.length) {
  console.log(str[count]);
  count++;
}