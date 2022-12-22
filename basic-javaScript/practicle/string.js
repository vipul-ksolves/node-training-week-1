let stringName = "Apple, Banana, Kiwi";
console.log(stringName.length);

// Extracting String Parts
// 1) slice()
let slice = stringName.slice(7, 30);
console.log(slice);
console.log(stringName.slice(7)); // 7 ke baad ke saare
// If a parameter is negative, the position is counted from the end of the string
console.log(stringName.slice(-9)); // ana, Kiwi
// This example slices out a portion of a string from position -12 to position -6
console.log(stringName.slice(-12, -6)); // Banana

// 2) substring
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);

//replace()
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "Ksolves");
console.log(newText); //By default, the replace() method replaces only the first match

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let NewString = text.replace(/MICROSOFT/i, "Ksolves");
console.log(NewString);

// replaceAll()
let replaceAll = text.replaceAll("Microsoft", "Ksolves");
//If search argument is a string, replaceAll() replaces all occurrences of search with replaceWith, while replace() only the first occurence
console.log(replaceAll);

//trim()
// The trim() method removes whitespace from both sides of a string
let text1 = "      Hello World!      ";
console.log(text1.length);
let text2 = text1.trim();
console.log(text2, text2.length);

//padStart()
let text3 = "5";
let padded = text3.padStart(4, "x");
console.log(padded);

//padEnd()
let text4 = "5";
let padded4 = text4.padEnd(4, "x");
console.log(padded4);

//charAt(position)
let text5 = "HELLO WORLD";
let charAt = text5.charAt(4);
console.log(charAt);

//The charCodeAt() method returns the unicode of the character at a specified index in a string
let charCodeAt = text5.charCodeAt(4);
console.log(charCodeAt);

// split()
// A string can be converted to an array with the split() method
let text6 = "Gives no error, but does not work";
let arrayText = text6.split(" ");
console.log(arrayText);
