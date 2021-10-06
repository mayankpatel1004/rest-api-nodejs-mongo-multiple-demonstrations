const fs = require("fs");

const bioData = {
    name: "Mayank",
    age: 35,
    channel: "Cloudswift Solutions"
}

//jsonData = JSON.stringify(bioData); //JSON.Stringify to be use when we need to convert object into json.
//console.log(jsonData);

//objData = JSON.parse(jsonData); // JSON.parse to be use when we need to convert json to object.
//console.log(objData.channel);


// const jsonData = JSON.stringify(bioData);
// fs.writeFile('json1.json',jsonData, (err) => {
//     console.log(err);
// });

fs.readFile("json1.json","utf-8",(err, data) => {
    //console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});