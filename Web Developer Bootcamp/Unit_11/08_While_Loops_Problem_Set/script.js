// Problem 1
console.log('PROBLEM 1: -10 - 19');
var count = -10;

while(count <= 19) {
  console.log(count);
  count++;
}

// Problem 2
console.log('PROBLEM 2: 10 - 40 evens only');
var even = 10;

while(even <= 40) {
  if(even % 2 === 0) {
    console.log(even);
  }
  even++
}

// Problem 3
console.log('PROBLEM 3: 300 - 333 odds only');
var odd = 300;

while(odd <= 333) {
  if(odd % 2 === 1) {
    console.log(odd);
  }
  odd++
}

// Problem 4
console.log('PROBLEM 4: 5 - 50 numbers divisible by 5 AND 3');
var num = 5;

while(num <=50 ) {
  if((num % 3 === 0) && (num % 5 === 0)) {
    console.log(num);
  }
  num++;
}