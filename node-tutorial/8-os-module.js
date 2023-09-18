//* OS Module - Gives us the liberty to interact with the Operating System and also the Server

//! Since it is a built-in module, we don't need to install it seperately. We need to install other third-party modules seperately.

const os = require("os");

//? Get info about the User
const user = os.userInfo();
console.log(user);

//? Method returns system's uptime in seconds
console.log(`System's Uptime is ${os.uptime()} seconds`);

//? Few More methods
const currentOS = {
  name: os.type(),
  released: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
