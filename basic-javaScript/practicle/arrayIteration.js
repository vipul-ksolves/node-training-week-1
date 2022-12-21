const numbers = [45, 4, 9, 16, 25];
let values;
numbers.forEach((value, i, array) => {
  console.log(value, i);
  //   console.log(array * 2);
});

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);
function myFunction(value, index, array) {
  return value * 2;
}

// This example creates a new array from elements with a value larger than 18:
const number = [45, 4, 9, 16, 25];
const over18 = number.filter(numFunction);

console.log(over18);
function numFunction(value, index, array) {
  return value > 18;
}

const numbers3 = [45, 4, 9, 16, 25];
let sum = numbers3.reduce(myFunction);
console.log(sum);
function myFunction(total, value, index, array) {
  return total + value;
}

//The reduce() method can accept an initial value:
let sum2 = numbers.reduce(myFunction, 100);
console.log(sum2);
function myFunction(total, value) {
  return total + value;
}

const numbers5 = [4, 9, 16, 25, 29];
let first = numbers5.findIndex(myFunction);
let second = numbers5.find(myFunction);
console.log(second); // 25
console.log(first); // 3
function myFunction(value, index, array) {
  return value > 18;
}

const Fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")); // is true
