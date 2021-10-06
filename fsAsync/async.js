// This file explain difference between sync and async //

const fs = require("fs");

/******* Sync way to get data from file ***********/

// const data = fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("After the data");

/*****  Async way to get data from file **/
fs.readFile("read.txt","utf-8",(err, data) => {
    console.log(data);
});
console.log("After data");

/**** Output will be below 
PS G:\wamp64\www\misc\rest-api-nodejs-mongo\fsAsync> node .\async.js
After data
today is fridayPlease append my additional data to file
Please append my additional data to file
****/