// Below code is for creating new file
const fs = require("fs");
//fs.writeFileSync("read.txt","Welcome to mayank patel");
fs.writeFileSync("read.txt","Welcome to mayank patel, welcome to new code");
// this will delete Welcome to mayank patel and add Welcome to mayank patel, welcome to new code
fs.appendFileSync("read.txt","\nHow are you i am fine thank you.....!!!!");

// read file in format.....
const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString();
console.log(org_data);

//rename of file
fs.renameSync("read.txt","readwrite.txt");