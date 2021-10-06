const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    
    // This is way 1 
    //     var fs = require("fs");
    //     fs.readFile('input.txt',(err, data) => {
    //         if(err) return console.error(err);
    //         res.end(data.toString());
    //     });

    // This is way 2 
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // });
    // rstream.on("error", () => {
    //     console.log(err);
    // });

    // This is way 3
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);
});
server.listen(8000, "127.0.0.1");