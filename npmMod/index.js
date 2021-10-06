const chalk = require("chalk");
const validator = require("validator");

const res = validator.isEmail("mayank.patel104@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));