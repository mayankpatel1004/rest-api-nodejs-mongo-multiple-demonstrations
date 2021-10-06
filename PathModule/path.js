const path = require("path");
//console.log(path.dirname("G:/wamp64/www/misc/rest-api-nodejs-mongo/PathModule/path.js"));
//console.log(path.basename("G:/wamp64/www/misc/rest-api-nodejs-mongo/PathModule/path.js"));

const myPath = path.parse("G:/wamp64/www/misc/rest-api-nodejs-mongo/PathModule/path.js");
console.log(myPath.name);