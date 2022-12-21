// Pass an Array to the new Set() constructor:

const letters = new Set(["a", "b", "c"]);
console.log(letters);

// Add Values to the Set
letters.add("d");
console.log(letters);

//Create a Set and add variables:
const e = "e";
const f = "f";
letters.add(e);
letters.add(f);
console.log(letters);

//If you add equal elements, only the first will be saved:
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

console.log(letters);
