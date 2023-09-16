//* PATH Module

const path = require("path");

//? Path Seperator
console.log(path.sep);

//? The joined filed path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//? To get the name of the base file or the innermost or most frequent file
const base = path.basename(filePath);
console.log(base);

//? To get the absolute path of the file, i.e. proper location
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
