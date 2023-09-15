//* GLOBALS - No WINDOW !!

//* For server side - no interaction with the browser window or module (can't use methods available by browser module)

//? 1) __dirname - path to current directory
//? 2) __filename - filename
//? 3) require - to use modules (CommonJS)
//? 4) module - info about current module (file)
//? 5) process - info about the env where the program is being executed

//! It still has access to all the built-in methods of normal Javascript like setInterval and setTimeout etc.

console.log(__dirname);
console.log(__filename);

setInterval(function () {
  console.log("hello world");
}, 1000);
