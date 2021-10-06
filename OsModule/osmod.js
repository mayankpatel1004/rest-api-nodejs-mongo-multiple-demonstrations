const os = require("os");
console.log("Architecture => ",os.arch());
console.log("Hostname => ",os.hostname());
console.log("Platform => ",os.platform());
console.log("Temp Directory => ",os.tmpdir());
console.log("OS Type => ",os.type());

const freeMemory = os.freemem();
console.log(freeMemory," bytes");
console.log(`${freeMemory/ 1024 / 1024 / 1024}`,"GB free memory");

const totalMemory = os.totalmem();
console.log(totalMemory," bytes");
console.log(`${totalMemory/ 1024 / 1024 / 1024}`,"GB total memory");