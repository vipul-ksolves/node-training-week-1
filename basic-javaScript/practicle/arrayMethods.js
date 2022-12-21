const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits);

const toString = fruits.toString();
console.log(toString);

const join = fruits.join(" @ ");
console.log(join);

const pop = fruits.pop();
console.log(pop);
console.log(fruits);

const push = fruits.push("Kiwi");
console.log(push);
console.log(fruits);

const shift = fruits.shift();
console.log(shift);
console.log(fruits);

const length = fruits.length;
console.log(length);

const Delete = delete fruits[1];
console.log(Delete);
console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

///////////////// Example (Merging Three Arrays) //////////////////

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myArray = arr1.concat(arr2, arr3);
console.log(myArray);

const Fruits = ["Banana", "Orange", "Apple", "Mango"];
Fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(Fruits);

const splice = Fruits.splice(0, 1);
console.log(splice);

const citrus = Fruits.slice(1);
console.log(citrus);

const citrus2 = Fruits.slice(3);
console.log(citrus2);

/* 
The slice() method can take two arguments like slice(1, 3).
The method then selects elements from the start argument, and up to (but not including) the end argument. 
*/
const citrus3 = fruits.slice(1, 3);
console.log(citrus3);
