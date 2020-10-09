const faker = require('faker');


console.log('===================================');
console.log('======  WELCOME TO MY SHOP!  ======');
console.log('===================================');

console.log(`${faker.name.firstName()}'s Grocery Cart:`);

for(let i = 0; i < 10; i++) {
  console.log(`${faker.commerce.productName()} - $${faker.commerce.price()}`);
}

console.log('===================================');
console.log('===================================');
