/******************************  Promise API **************************************/

// const fs = require("fs/promises");  // not working in es6
import * as fs from "fs/promises";

// Creating Directory - Right path should be there
// try {
//   await fs.mkdir(
//     "c:\\Users\\vipul\\Documents\\Desktop\\node-training-week-1\\advanced-NodeJs\\demo"
//   );
//   console.log("Directory is created ....");
// } catch (error) {
//   console.log(error);
// }

// Creating Directory - Right path should be there
// try {
//   await fs.mkdir(
//     "c:\\Users\\vipul\\Documents\\Desktop\\node-training-week-1\\advanced-NodeJs\\demo2\\demo1",
//     { recursive: true }
//   );
//   console.log("Directory is created ....");
// } catch (error) {
//   console.log(error);
// }

//Read Directory
// try {
//   const files = await fs.readdir(
//     "c:\\Users\\vipul\\Documents\\Desktop\\node-training-week-1\\advanced-NodeJs\\demo2"
//   );
//   for (const file of files) console.log(file);
// } catch (error) {
//   console.log(error);
// }

// Read content of directory
// try {
//   const content = await fs.readFile("./demo2/demo1/test.text", (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//   });
//   console.log(content.toString());
// } catch (error) {
//   console.log(error);
// }

// Remove directory - Directory should be empty
// try {
//   await fs.rmdir("./demo");
//   console.log("Directory removed...");
// } catch (error) {
//   console.log(error);
// }

// writing files - file should be there
// try {
//   fs.writeFile("./demo2/demo1/test.text", "Hellow Ksolves....");
//   console.log("File updated...");
// } catch (error) {
//   console.log(error);
// }

// Create and Write file
// try {
//   await fs.writeFile("temp.text", "I Love to code!");
//   console.log("file is crated and wrriten !");
// } catch (error) {
//   console.log(error);
// }

//copy file - if new file is not avalable , it will create file and copy the content
// try {
//   await fs.copyFile("./temp.text", "temp2.text");
//   console.log("File copied....");
// } catch (error) {
//   console.log(error);
// }

/******************************  callback API **************************************/
