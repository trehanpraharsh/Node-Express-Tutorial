//* Information about "package.json" file

//? 1) Firstly, it contains dependencies section which includes information about all the external packages included while creating the app.

//? 2) DEV Dependency - These are the dependencies we will use while creating the app and they won't be significant while deploying and the code will work without them.

//? 3) Under the scripts section you can define multiple commands like start, build etc. - These will hold the command that will be used whenever we use try to run the script. Eg:- for this repo the default start command will hold "node app.js".

//? 4) We can uninstall any module using :- npm uninstall <packageName>

//? 5) npx simplified installing apps globally, now you can install globally the app using npx mentioned according to the docs.

//* Information about "package-lock.json"

//? 1) Firstly, why is there a need of "package-lock.json" - It is in order to maintain the version of packages used while building the projects, because there are updates coming in at frequent intervals and some new updates might not support your old code, so in that case it is extremely important to have a track of not just the dependencies that we install but also their version which we can use and not make our project obsoluete when there is a new update for the packages. Eg:- Bootstrap is using JQuery but we need to have a specific version of JQuery to support a feature.

//! You can learn more about package.json visiting site :- "nodesource.com/blog/basic-of-package-json-in-node-js-and-npm"
