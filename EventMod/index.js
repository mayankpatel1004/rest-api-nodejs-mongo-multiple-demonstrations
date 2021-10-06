const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is mayank");
});
event.emit("sayMyName");
// If we create any our custom event, it should get define above calling. Otherwise it won't get work.



event.on("CheckEvent",(sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("CheckEvent",200,"ok");