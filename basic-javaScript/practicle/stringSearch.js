// indexOf()
// The indexOf() method returns the index of (position of) the first occurrence of a string in a string:
let str = "Please locate where 'locate' where occurs!";
console.log(str.indexOf("where"));

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
console.log(str.lastIndexOf("where"));

// Both methods accept a second parameter as the starting position for the search:
console.log(str.indexOf("locate", 15));
console.log(str.lastIndexOf("locate", 15));

// node: Both indexOf(), and lastIndexOf() return -1 if the text is not found:
console.log(str.lastIndexOf("John"));
console.log(str.indexOf("John"));

// search()
//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
console.log(str.search("locate"));
console.log(str.search(/locate/));

//includes()
// The includes() method returns true if a string contains a specified value.
let text = "Hello world, welcome to the universe.";
let include = text.includes("world");
console.log(include);
