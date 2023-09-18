//* Alternative way to export data
module.exports.items = ["item1", "item2", "item3"];

//* Can export any data type array, objects, functions etc.
const person = {
  name: "hemu",
  age: 18,
};

//! We can also export as a particular name, it is not neccessary to use the default name
module.exports.singlePerson = person;
