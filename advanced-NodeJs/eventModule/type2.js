import EventEmitter from "events";

//Creating instance
const eventEmitter = new EventEmitter();

// functions
let fun1 = (msg) => {
  console.log("Message from fun1: ", msg);
};
let fun2 = (msg) => {
  console.log("Message from fun2: ", msg);
};

// Registring to events
eventEmitter.on("myEvent", fun1);
eventEmitter.on("myEvent", fun1);
eventEmitter.on("yourEvent", fun2);

//Removing listener fun1
eventEmitter.removeListener("myEvent", fun1);

// Triggering myEvent
eventEmitter.emit("yourEvent", "Patel");
eventEmitter.emit("myEvent", "Vipul");

// Removing all the listeners to myEvent
eventEmitter.removeAllListeners("myEvent");

// Triggering myEvent
eventEmitter.emit("myEvent", "Event occurred");
