const path = require("path");

console.log("       ");

console.log(path.basename(__filename));
console.log("       ");

console.log(path.dirname(__filename));
console.log("       ");

console.log(path.basename(__dirname));
console.log("       ");

console.log(path.dirname(__dirname));
console.log("       ");

console.log(path.extname(__filename));
console.log("       ");

console.log(path.join("/sagar", "rewa", "jabalpur/katni", "/bhopal"));
console.log(path.join("/sagar", "rewa", "jabalpur/katni", "/bhopal", ".."));

console.log("       ");
console.log(path.normalize("c:\\temp\\\\foo\\bar"));

console.log(path.parse(__filename));
console.log("       ");

console.log(path.isAbsolute("c:\\temp\\\\foo\\bar"));
