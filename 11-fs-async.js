//* File System Module - Asynchronous

const { readFile, writeFile } = require("fs");

//! Syntax for this is :- readFile( path, type, callback-function (error, result) )
readFile("./content/first.txt", "utf-8", function (error, result) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(result);
});

//? Implementing writeFile also, using a callback hell kind of approach
console.log("starting the task - async wayy");
readFile("./content/first.txt", "utf-8", function (err, res) {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;
  readFile("./content/second.txt", "utf-8", function (err2, res2) {
    if (err2) {
      console.log(err2);
      return;
    }
    const second = res2;
    writeFile(
      "./content/result-async.txt",
      `Hello this is created using writeFile method : ${first} and : ${second}`,
      function (errW, resW) {
        if (errW) {
          console.log(err2);
          return;
        }
        console.log("done with the task - async wayy");
      }
    );
  });
});
console.log("starting new task - async wayy");
