const fs = require("fs");

//fs.writeFile("read.txt","today is friday"); // this will give you error TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined


// fs.writeFile("read.txt","today is friday", (err) => {
//     console.log("File has been created......................");
//     console.log(err);
// });

// fs.appendFile("read.txt","\nPlease append my additional data to file", (err) => {
//     console.log("Content appended...");
//     console.log(err);
// });

// fs.readFile("read.txt","UTF-8",(err,data) => {
//     console.log(data);
// });