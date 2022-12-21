const fruits = ["Banana", "Orange", "Apple", "Mango"];

const sortedFruits = fruits.sort();
console.log(sortedFruits);

const reverse = fruits.reverse();
console.log(reverse);

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => {
  return a - b;
});
console.log(points);

// now points[0] contains the lowest value
const lowest = points[0];
console.log(lowest);

// and points[points.length-1] contains the highest value
const highest = points[points.length - 1];
console.log(highest);

//Use the same trick to sort an array descending:
points.sort((a, b) => {
  return b - a;
});
console.log(points);
