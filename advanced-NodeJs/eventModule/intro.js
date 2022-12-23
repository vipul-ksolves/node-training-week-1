import EventEmitter from "events";

// Creating Object/instance
const eventEmitter = new EventEmitter();

// // Registering to myEvent
eventEmitter.on("myEvent", (msg) => {
  console.log(msg);
});

// Triggering myEvent
eventEmitter.emit("myEvent", "First Event ..");
