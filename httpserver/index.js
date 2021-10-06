const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end("Hello from the other sides...");
    } else if(req.url == '/about'){
        res.end("About page called............");
    } else if(req.url == '/contact'){
        res.end("Contact page called............");
    } else if(req.url == '/userapi'){
        fs.readFile(`${__dirname}/UserApi/userapi.json`,'utf-8',(err,data) => {
            //console.log(err);
            //console.log(data);
            //res.end(data);
            const objData = JSON.parse(data);
            res.writeHead(200,{"content-type":"application/json"});
            res.end(objData[2].name);
        });
        //res.end("UserAPI Side...");
    } else {
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>Error 404. Page not found...</h1>");
    } 
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port no 8000...");
});