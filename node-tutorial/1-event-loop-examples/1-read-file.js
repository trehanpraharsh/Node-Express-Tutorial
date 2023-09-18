const { readFile } = require("fs");

console.log("started the task");
//* Check File path
readFile("../content/first.txt", "utf-8", function (error, result) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");
