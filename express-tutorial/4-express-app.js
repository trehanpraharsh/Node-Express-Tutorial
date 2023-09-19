//* We don't need to install path module seperately as it already comes installed with node
//* This is done to pass the exact path of our navbar app (index.html) file.
const path = require("path");

const express = require("express");
const app = express();

//! With the use of app.use() method passing express.static we can specify the path of the static resources which we want our server to have access to.
//? It is a convention or good practice to have the common files seperately in a folder called public
//? Static method for static files (maybe) will know about this later in the course
app.use(express.static("./public"));

//? We'll be using the sendFile method here, We can also skip this altogether and just write the middleware setup.
app.get("/", function (req, res) {
  res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", function (req, res) {
  res.status(404).send("Resource not found");
});

app.listen(6969, function () {
  console.log("Server is running at port : 6969...");
});
