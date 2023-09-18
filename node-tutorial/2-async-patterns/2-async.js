//! We could also do this by not using 'util' module:-
//* const { readFile, writeFile } = require("fs").promises;
//! The upper line will convert the function to promises and hence we could have used the default readFile and writeFile methods as well.

const { readFile, writeFile } = require("fs");

//! This module has a function 'promisify' that converts a normal function to return a promise
const util = require("util");

//? Now converting our readFile function to return a promise
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

async function start() {
  try {
    const first = await readFilePromise("../content/first.txt", "utf-8");
    const second = await readFilePromise("../content/second.txt", "utf-8");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOMELY DONE : ${first} , ${second} , END `,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
}

start();

//* First Option
// function getText(path) {
//     return new Promise(function (resolve, reject) {
//       readFile(path, "utf-8", function (err, data) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   }

//   getText("./content/first.txt")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//* Second way
// function getText(path) {
//     return new Promise(function (resolve, reject) {
//       readFile(path, "utf-8", function (err, data) {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   }

//   async function start() {
//     try {
//       const first = await getText("./content/first.txt");
//       console.log(first);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   start();
