let initialArray = [];

createArray(initialArray);
printReverse(initialArray);
isUniform(initialArray);
sumArray(initialArray);
max(initialArray);

function createArray(arr) {
  let item1 = prompt('Item 1');
  let item2 = prompt('Item 2');
  let item3 = prompt('Item 3');
  let item4 = prompt('Item 4');
  arr = [item1, item2, item3, item4];
  initialArray = arr;
  console.log('----------');
  console.log('Initial Array:');
  console.log(arr);
  console.log('----------');
}

function printReverse(arr) {
  console.log('----------');
  console.log('printReverse():');
  for(let index = arr.length - 1; index >= 0; index--) {
    console.log(arr[index]);
  }
}

function isUniform(arr) {
  console.log('----------');
  console.log('isUniform():');
  let firstItem = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] !== firstItem) {
      console.log(`Array is Uniform: False`);
      return false;
    }
  }
  console.log(`Array is Uniform: True`);
  return true;
}

function sumArray(arr) {
  console.log('----------');
  console.log('sumArray():');
  let newNumber = 0;
  arr.forEach((num) => {
    newNumber += parseInt(num);
  });
  console.log(`Total: ${newNumber}`);
  return newNumber;
}

function max(arr) {
  console.log('----------');
  console.log('max():');
  let bigNum = arr[0];
  arr.forEach((num) => {
    if (parseInt(num) > bigNum) {
      bigNum = num;
    }
  });
  console.log(`Max in Array: ${bigNum}`);
  return bigNum;
}
