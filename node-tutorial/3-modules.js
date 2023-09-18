//* CommonJS, every File is a module (by default)
//* Modules - Encapsulated Code (Only share the minimum)

//! Whenever you export a module, it is invoked by default. And by default your module is just exported as a normal vannila or common JS function and it is executed as soon as you import it even, even when you don't assign any variable to it.
require("./7-mind-grenade");

//! Also a method to import modules, but destructuring is a better and ES6 way
// const names = require('./4-names');
const { parth, ishaan } = require("./4-names");
const sayHi = require("./5-utils");

//! By default if there are multiple things to export, they are exported as an object containing the exports
const alternativeData = require("./6-alternative-flavour");
console.log(alternativeData);

sayHi("Praharsh");
sayHi(parth); // could have done sayHi(names.parth)
sayHi(ishaan); // could have done sayHi(names.ishaan)
