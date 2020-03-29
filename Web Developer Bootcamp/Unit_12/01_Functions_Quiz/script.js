let arg = prompt('Please provide a number.');
let kebab = prompt('Please provide a kebab string.');

isEven(arg);

factorial(arg);

// kebabToSnake(kebab);

// function isEven(arg) {
//   if (arg % 2 === 0) {
//     alert(`${arg} is an even number.`);
//     return true;
//   } else if (arg % 2 === 1) {
//     alert(`${arg} is an odd number.`);
//     return false;
//   } alert(`Nice try! ${arg} is not a number.`);
//   return false;
// }

function isEven(arg) {
  return arg % 2 === 0;
}

// function factorial(arg) {
//   let tempArg = parseInt(arg);
//   let num = tempArg;
//   if (tempArg % 2 !== 0 && tempArg % 2 !== 1) {
//     alert(`Again... ${arg} is not a number.`);
//     return false;
//   }
//   if (tempArg === 0 || tempArg === 1) {
//     num = 1;
//     alert(`The factorial of ${arg} is ${num}.`);
//     return num;
//   }
//   while (tempArg > 1) {
//     tempArg--;
//     num *= tempArg;
//   }
//   alert(`The factorial of ${arg} is ${num}.`);
//   return num;
// }

function factorial(arg) {
  let num = 1;
  for (let i = 2; i <= arg; i++) {
    num*=i;
  }
  return num;
}

function kebabToSnake(kebab) {
  let check = kebab.search('-');
  if (check === -1) {
    alert('Please provide a kebab string. (Ex: hello-world)');
    return false;
  }
  let res = kebab.replace(/-/g, '_');
  alert(res);
  return res;
}