//* OS Module - Gives us the liberty to interact with the Operating System and also the Server

//! Since it is a built-in module, we don't need to install it seperately. We need to install other third-party modules seperately.

const os = require("os");

//? Get info about the User
const user = os.userInfo();
console.log(user);
