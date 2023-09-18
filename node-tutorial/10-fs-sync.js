//* File System Module - Synchronous

const { readFileSync, writeFileSync } = require("fs");

//? Reading synchronously the texts of these two text files
//! Syntax is readFileSync(path, type)
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first);
console.log(second);

//? Writing synchronously to the file, it will create the file if there isn't one and it will overwrite the text in the file if there is already a file with text in it.
//! Syntax is writeFileSync(path, text-to-be-written)
writeFileSync(
  "./content/result-sync.txt",
  `Hello from file 1 : ${first}, Hello from file 2 : ${second}`
);

//? If we want to append the result to the file then we add another parameter to the syntax
//! writeFileSync(path, text-to-be-written, {flag: 'a'})
console.log("starting the task");
writeFileSync(
  "./content/result-appended-sync.txt",
  "(Appendend text starts from here)",
  {
    flag: "a",
  }
);
console.log("done with the task");
console.log("starting next task");
