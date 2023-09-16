//* npm -> global command, comes with node
//* npm --version

//* Local Dependency -> use it only in this particular project
//* npm i <packageName>

//* Global Dependency -> use it in any project
//* npm install -g <packageName>
//* sudo npm install -g <packageName> (mac)

//* package.json -> manifest file (stores important information about project/packages)
//* manual approach -> create "package.json" in the root and create properties etc.
//* npm init -> step by step way to create "package.json" file, press 'enter' to skip
//* npm init -y -> saying yes to everything, creating a default "package.json" file

const _ = require("lodash");

const items = [1, [2, [3], [4, [5]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
