//* Events

//Default practice to call it eventemitter
const EventEmitter = require("events");

//? There are two major properties, on and emit
//? on listens to the event on the emitter
//? emit emits or throws an event

// There are two ways, one is creating a custom event and other is using one already there
const customEmitter = new EventEmitter();

customEmitter.on("response", function (name, id) {
  console.log(`data recieved for username ${name} and id as ${id}`);
});
customEmitter.on("response", function () {
  console.log("some other logic");
});

// The other two fields are the parameters that we are passing on the emitter
customEmitter.emit("response", "Praharsh", "5");
