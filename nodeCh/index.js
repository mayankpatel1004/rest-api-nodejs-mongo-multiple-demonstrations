const fs = require("fs");

/** create new directory name patel **/
//fs.mkdirSync("Patel");

/*** create file under folder and write into it... ***/
//fs.writeFileSync("Patel/bio.txt","My name is Mayank Patel");

/*** Append content to file inside folder ***/
//fs.appendFileSync("Patel/bio.txt","\nPlease append this to my existing data");

/*** read file content ***/
// const data = fs.readFileSync("Patel/bio.txt","utf-8");
// console.log(data);

/*** rename of file ***/
//fs.renameSync("Patel/bio.txt","Patel/mybio.txt");

/*** delete of file ***/
//fs.unlinkSync("Patel/mybio.txt");

/*** delete of directory ***/
//fs.rmdirSync("Patel");
